#!/bin/bash

#give permission for everything in the moho-fe directory
sudo chmod -R 777 /home/ubuntu/moho-fe

#navigate into our working directory where we have all our github files
cd /home/ubuntu/moho-fe

#start our node app in the background
nginx -s reload
