set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Build-specific configuration
configure :build do
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Use relative URLs
  activate :relative_assets
end
