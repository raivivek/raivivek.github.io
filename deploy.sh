#!/bin/bash

# Ensure that you have rebuilt the site and commited your changes
echo "Deploying to GitHub pages..."

# Create the subtree
git subtree split --prefix site -b gh-pages
# Push to origin
git push -f origin gh-pages:gh-pages
# Remove so that later the process can be repeated
git branch -D gh-pages
# Push master
git push origin master
