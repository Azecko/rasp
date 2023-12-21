#!/bin/bash

# Remove the .git directory
rm -rf .git

# Initialize a new git repository
git init --initial-branch=main

# Get the name of the parent folder
PARENT_FOLDER_NAME=$(basename $(pwd))

# Replace all occurrences of 'integration-boilerplate' with the parent folder's name in vite.config.js and package.json
sed -i '' "s/integration-boilerplate/$PARENT_FOLDER_NAME/g" vite.config.js
sed -i '' "s/integration-boilerplate/$PARENT_FOLDER_NAME/g" package.json

# Replace occurrences in README.md
sed -i '' "s/Integration boilerplate/$PARENT_FOLDER_NAME/g" README.md
sed -i '' "s|> Gitlab pages: https://formatz.gitlab.io/integration-boilerplate|> Gitlab pages: https://formatz.gitlab.io/$PARENT_FOLDER_NAME|" README.md
sed -i '' "s/your-project-name/$PARENT_FOLDER_NAME/g" README.md
sed -i '' "s/integration-boilerplate/$PARENT_FOLDER_NAME/g" README.md
sed -i '' "/git clone git@gitlab.com:formatz\/integration-boilerplate.git your-project-name/d" README.md
sed -i '' "/cd your-project-name/d" README.md
sed -i '' "/# run setup script/d" README.md
sed -i '' "/.\/setup.sh/d" README.md

# Remove this script
rm -- "$0"