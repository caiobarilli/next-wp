#!/bin/bash

# variables
whoami=`whoami`
pwd=$(pwd)
container_id=$(docker ps -qf "name=wordpress")

echo " "
echo " "
echo " ================================================================= "
echo " "
echo " Setting Permissions in $pwd/backend/cms/wp-content/themes"
echo " "
echo " ================================================================= "
echo " "
echo " "
echo " "

# docker exec -it $container_id /bin/bash
chown -R 1000:www-data ./backend/cms/wp-content/themes
chown -R 1000:www-data ./backend/cms/wp-content/themes/wp_custom_theme/

docker exec -it $container_id /bin/bash -c "
cd /var/www/html/wp-content/themes
ls -lah
"

echo " "
echo " "
echo " Bye $whoami"
echo " "
echo " "