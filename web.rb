require 'sinatra'
require 'open-uri'
require 'yaml'

# set the url of my dropbox public folder
configure do
  @@prefix = 'https://dl.dropbox.com/u/102253740/vdziubak/'
end

not_found do
  "404 not found... sorry =("
end

# renders main information + cv 'general' section
get '/' do
  if request.xhr?
    haml :welcome, :layout => false
  else
    @@cv = YAML.parse( open( @@prefix + 'cv.yaml') ).to_ruby
    @@info = YAML.parse( open( @@prefix + 'homepage.yaml') ).to_ruby
    haml :welcome
  end
end

# ajax-only, loads the necessary data
get '/cv' do
  pass unless request.xhr?
  haml :cv, :layout => false
end

get '/portfolio' do
  pass unless request.xhr?
  haml :portfolio, :layout => false
end
