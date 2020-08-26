build:
	hugo

serve:
	hugo -D serve

fetch/css:
	wget -O static/stylesheets/dl-frontend.css http://digital-land-design.herokuapp.com/static/stylesheets/dl-frontend.css
