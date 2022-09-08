#!/bin/bash

# variables
pwd=$(pwd)

echo " "
echo " "
echo " ================================================================= "
echo " "
echo " Up containers in $pwd/backend/cms/"
echo " "
echo " ================================================================= "
echo " "
echo " "
echo " "

cd $pwd/backend/cms
docker-compose up -d
