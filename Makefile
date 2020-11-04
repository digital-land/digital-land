build:
	hugo

serve:
	hugo -D serve

fetch/css:
	wget -O static/stylesheets/dl-frontend.css https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/stylesheets/dl-frontend.css
	wget -O static/stylesheets/styleguide.css https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/stylesheets/styleguide.css

fetch/js:
	wget -O static/javascripts/dl-frontend.js https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/javascripts/dl-frontend.js
	wget -O static/javascripts/dl-cookies.js https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/javascripts/dl-cookies.js
	wget -O static/javascripts/dl-cookies.js https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/javascripts/dl-maps.js
	wget -O static/javascripts/govuk/govuk-frontend.min.js https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/javascripts/govuk/govuk-frontend.min.js
	wget -O static/javascripts/vendor/highlight.pack.js https://raw.githubusercontent.com/digital-land/frontend/master/digital_land_frontend/static/javascripts/vendor/highlight.pack.js

fetch/all: fetch/css fetch/js

init::
	@:
