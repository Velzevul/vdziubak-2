require 'sinatra'
require 'open-uri'
require 'yaml'

cv_yaml_link = 'https://dl.dropbox.com/u/102253740/cv.yaml'
welcome_yaml_link = 'https://dl.dropbox.com/u/102253740/homepage.yaml'

# renders main information + cv 'general' section
get '/' do
  @@cv = YAML.parse( open(cv_yaml_link) ).to_ruby
  @@welcome = YAML.parse( open(welcome_yaml_link) ).to_ruby
  haml :general
end

# ajax-only, loads the necessary section of cv file
get '/general' do
  pass unless request.xhr?
  haml :general, :layout => false
end

get '/education' do
  pass unless request.xhr?
  haml :education, :layout => false
end

get '/experience' do
  pass unless request.xhr?
  haml :experience, :layout => false
end

get '/awards' do
  pass unless request.xhr?
  haml :awards, :layout => false
end

get '/skills' do
  pass unless request.xhr?
  haml :skills, :layout => false
end

get '/interests' do
  pass unless request.xhr?
  haml :interests, :layout => false
end

get '/publications' do
  pass unless request.xhr?
  haml :publications, :layout => false
end