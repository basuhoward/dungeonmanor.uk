# frozen_string_literal: true

require "pathname"
require "uri"

site_root = Pathname.new(File.expand_path("../_site", __dir__))
abort "_site does not exist; build the site first" unless site_root.directory?

failures = []

site_root.glob("**/*.html").each do |html_file|
  body = html_file.read
  if body.include?("localhost:")
    failures << "#{html_file.relative_path_from(site_root)} contains a localhost URL"
  end

  body.scan(/(?:href|src)=["']([^"']+)["']/i).flatten.each do |raw_url|
    next if raw_url.empty? || raw_url.start_with?("#", "mailto:", "tel:", "data:", "javascript:")
    next if raw_url.match?(%r{\A(?:https?:)?//}i)

    clean_url = raw_url.split(/[?#]/, 2).first
    next if clean_url.nil? || clean_url.empty?

    decoded_url = URI::DEFAULT_PARSER.unescape(clean_url)
    candidate = if decoded_url.start_with?("/")
                  site_root.join(decoded_url.delete_prefix("/"))
                else
                  html_file.dirname.join(decoded_url).cleanpath
                end

    candidates = [candidate]
    candidates << candidate.join("index.html") if decoded_url.end_with?("/") || candidate.extname.empty?
    candidates << Pathname.new("#{candidate}.html") if candidate.extname.empty?

    unless candidates.any?(&:exist?)
      failures << "#{html_file.relative_path_from(site_root)} → #{raw_url}"
    end
  end
end

if failures.empty?
  puts "Validated internal links and assets."
else
  warn "Broken internal references:"
  failures.uniq.sort.each { |failure| warn "  #{failure}" }
  exit 1
end
