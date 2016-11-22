#!/bin/bash
echo "source blog: "
read source
echo "new blog name: "
read dest
mkdir $dest
rsync -av \
  --exclude='**/node_modules' \
  --exclude=$source'/js/*build*' \
  --exclude=$source'/.git' \
  $source/* $dest;
cd $dest;
find . -type f -print0 \
  | xargs -0 sed -i "s/$source/$dest/g"

echo "created: $dest"


echo "Installing npm modules .."
npm install

echo "Create an interesting map for new blog"
echo " and push your changes to github."
