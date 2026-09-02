#!/usr/bin/env python3
"""Fail when generated HTML points to a missing internal page or asset."""

from __future__ import annotations

import html.parser
import sys
import urllib.parse
from pathlib import Path


SITE_ROOT = Path(__file__).resolve().parents[1] / "_site"


class ReferenceParser(html.parser.HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        for name in ("href", "src"):
            if attributes.get(name):
                self.references.append(attributes[name] or "")


def possible_targets(html_file: Path, raw_url: str) -> list[Path]:
    clean_url = urllib.parse.unquote(urllib.parse.urlsplit(raw_url).path)
    if clean_url.startswith("/"):
        candidate = SITE_ROOT / clean_url.removeprefix("/")
    else:
        candidate = html_file.parent / clean_url

    targets = [candidate]
    if clean_url.endswith("/") or not candidate.suffix:
        targets.append(candidate / "index.html")
    if not candidate.suffix:
        targets.append(candidate.with_suffix(".html"))
    return targets


def should_check(raw_url: str) -> bool:
    if not raw_url or raw_url.startswith(("#", "mailto:", "tel:", "data:", "javascript:")):
        return False
    return not raw_url.startswith(("http://", "https://", "//"))


def main() -> int:
    if not SITE_ROOT.is_dir():
        print("_site does not exist; build the site first", file=sys.stderr)
        return 1

    failures: list[str] = []
    for html_file in SITE_ROOT.rglob("*.html"):
        body = html_file.read_text(encoding="utf-8")
        relative_file = html_file.relative_to(SITE_ROOT)
        if "localhost:" in body:
            failures.append(f"{relative_file} contains a localhost URL")

        parser = ReferenceParser()
        parser.feed(body)
        for raw_url in parser.references:
            if should_check(raw_url) and not any(target.exists() for target in possible_targets(html_file, raw_url)):
                failures.append(f"{relative_file} → {raw_url}")

    if failures:
        print("Broken internal references:", file=sys.stderr)
        for failure in sorted(set(failures)):
            print(f"  {failure}", file=sys.stderr)
        return 1

    print("Validated internal links and assets.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
