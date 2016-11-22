#!/bin/bash
read -p "Source template project: " -i template-project -e source
read -p "New project: " -e projjs
proj=`echo $projjs | sed "s/\.js//"`
read -p "Description: " -e desc
read -p "Stand alone name: " -e alone
read -p "Keywords: " -e keywords
mkdir $projjs
cd $projjs
mkdir dist
touch dist/$proj'.js'
mkdir test
touch test/test.js
cp ../$source/.gitignore .
cp ../$source/LICENSE.md .
cp ../$source/README.md .
cp ../$source/package.json .
touch $proj'.js'
sed "s/$source-js/$projjs/g" -i package.json
sed "s/$source/$proj/g" -i package.json
sed "s/{DESCRIPTION}/$desc/g" -i package.json 
sed "s/{STANDALONE}/$alone/g" -i package.json 
sed "s/{KEYWORDS}/$keywords/g" -i package.json 
echo "$projjs created."
echo "Initiating git repository at github.."
git init
data='{ "name":"'$projjs'", "description": "'$desc'"}'
echo $data > /home/gaganb/tmp/data.txt
read -p "want to proceed" -e ans
read -p "where to create: projects - 1, geosquare - 2 ? " -i 1 -e group
if [ $group -eq 1 ]
then 
   githubDest='https://api.github.com/user/repos'
   user='gagan-bansal'
elif [ $group -eq 2 ]
then
  githubDest='https://api.github.com/orgs/geosquare/repos'
  sed "s/gagan-bansal/geosquare/g" -i package.json
  user='geosquare'
else 
  githubDest=''
fi
curl -o /home/gaganb/create-project.log -u 'gaganbansal123@gmail.com' \
  $githubDest \
  -d @/home/gaganb/tmp/data.txt

repo=$projjs'.git'
git remote add origin https://github.com/$user/$repo

echo "Installing npm modules .."
npm install browserify --save-dev
npm install chai --save-dev
npm install exorcist --save-dev
npm install mocha --save-dev
npm install uglify-js --save-dev

echo "Created $projjs and initiated empty repo on github."
cd -
