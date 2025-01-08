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
echo "series or movie? (default: series)"
read type
type="${type:=series}"

echo ""
echo "Title:"
read name

if [ $type == series ]
then
  echo ""
  echo "What Season?"
  read season

  echo ""
  echo "What Episode?"
  read episode
fi

echo ""
echo "What Rating (1-5)"
read rating

function slug(){
  echo -n $1 | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z.md
}

theSlug=$(slug "$name")
date=$(date +%Y-%m-%dT00:00:00)
fullName="$(echo $name) $(echo $season)x$(echo $episode)"

if [ $type == movie ]
then
  fullName="$(echo $name)"
fi

emoji=""
for i in $(eval echo "{1..$rating}")
  do
    emoji="$(echo $emoji)⭐️"
 done

read -r -d '' template << EOM
---
\ntype: $type
\ntitle: "$(echo $fullName)"
\ndate: "$(echo $date)"
\nname: "$(echo $name)"
\nseason: $season
\nepisode: $episode
\nrating: $rating
\nratingEmoji: "$(echo $emoji)"
\nshare: $share
\n---
EOM

echo $template

file=./content/blog/tv-shows/$( echo $theSlug)/$(echo $season)x$( echo $episode)/index.md

if [ $type == movie ]
then
  file=./content/blog/movies/$( echo $theSlug)/index.md
fi

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
echo "*       Format files      *"
echo "*                         *"
echo "***************************"
npm run format

echo ""
echo "***************************"
echo "*                         *"
echo "*       Git commit        *"
echo "*                         *"
echo "***************************"
git add -A && git commit -m "$( echo $fullName)"

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