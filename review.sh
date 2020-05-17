#!/bin/bash

echo ""
echo "***************************"
echo "*                         *"
echo "*  Ricard Torres Reviews  *"
echo "*                         *"
echo "***************************"

echo ""
echo "***************************"
echo "*                         *"
echo "*        Git Pull         *"
echo "*                         *"
echo "***************************"

git pull

echo ""
echo "Name of the show:"
read name

echo ""
echo "What Season?"
read season

echo ""
echo "What Episode?"
read episode

echo ""
echo "What Rating (1-5)"
read rating

function slug(){
  echo -n $1 | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z.md
}

theSlug=$(slug "$name")
date=$(date +%Y-%m-%dT%T)
showName="$(echo $name) $(echo $season)x$(echo $episode)"

read -r -d '' template << EOM
---
\ntitle: $(echo $showName)
\ndate: "$(echo $date)"
\nshow: "$(echo $theSlug)"
\nseason: $season
\nepisode: $episode
\nrating: $rating
\n---
EOM

echo $template

file=./content/blog/$( echo $theSlug)/$(echo $season)x$( echo $episode)/index.md

mkfileP() { mkdir -p "$(dirname "$1")" || return; touch "$1"; }
mkfileP $file
echo -e $template >> $file
echo ""
echo "***************************"
echo "*                         *"
echo "*      File created       *"
echo "*                         *"
echo "***************************"

nano $file

echo ""
echo "***************************"
echo "*                         *"
echo "*       Git commit        *"
echo "*                         *"
echo "***************************"
git add -A && git commit -m $showName

echo ""
echo "***************************"
echo "*                         *"
echo "*        Git Push         *"
echo "*                         *"
echo "***************************"
git push

echo ""
echo "***************************"
echo "*                         *"
echo "*        All done         *"
echo "*                         *"
echo "***************************"