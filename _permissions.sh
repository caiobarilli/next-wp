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

docker exec -it $container_id /bin/bash -c "
cd /var/www/html/wp-content/themes
mkdir my_theme_dir
cd /var/www/html/wp-content/
ls -lah
"

chown -R 1000:www-data ./backend/cms/wp-content/themes

ln -s ./backend/theme/** ./backend/cms/wp-content/themes/my_theme_dir/

chown -R 1000:www-data ./backend/cms/wp-content/themes/my_theme_dir/

echo " "
echo " "
echo " Bye $whoami"
echo " "
echo " "