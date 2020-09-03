#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

rm -rf public/*

# Build the project.
hugo

# get latest committed version of dl-frontend.css
wget -O public/stylesheets/dl-frontend.css https://raw.githubusercontent.com/digital-land/digital-land-frontend/master/application/static/stylesheets/dl-frontend.css

# Go To Public folder
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..
