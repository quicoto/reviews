#!/bin/bash

echo ""
echo "***************************"
echo "*                         *"
echo "*  Ricard Torres Reviews  *"
echo "*                         *"
echo "***************************"
echo ""



echo "TV Show or Movie?"
read type

echo "Name of the show:"
read name

echo "What Season?"
read season

echo "What Episode?"
read episode

echo "What Rating (1-5)"
read rating

file=./content/blog/$(date +%Y-%m-%d)-$(echo -n 'The Office' | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z.md).md

mkdir $file
nano $file