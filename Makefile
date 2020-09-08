build:
	hugo

serve:
	hugo -D serve

fetch/css:
	wget -O static/stylesheets/dl-frontend.css https://raw.githubusercontent.com/digital-land/digital-land-frontend/master/application/static/stylesheets/dl-frontend.css

fetch/js:
	wget -O static/javascripts/dl-frontend.js https://raw.githubusercontent.com/digital-land/digital-land-frontend/master/application/static/javascripts/dl-frontend.js
	wget -O static/javascripts/dl-cookies.js https://raw.githubusercontent.com/digital-land/digital-land-frontend/master/application/static/javascripts/dl-cookies.js

fetch/all: fetch/css fetch/js
