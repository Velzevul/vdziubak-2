require 'sinatra'
require 'open-uri'
require 'yaml'

# set the url of my dropbox public folder
before do
end

not_found do
  "404 not found... sorry =("
end

error do
  "error =("
end

get '/' do
  @prefix = 'https://dl.dropbox.com/u/102253740/vdziubak/'
  @portfolio = YAML.parse( open( @prefix + 'portfolio.yaml') ).to_ruby
  erb :index, :layout => false
end
