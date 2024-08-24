#!/bin/bash
git pull
npm run build
sudo rm -rf /etc/nginx/sites/paac
sudo cp -r ./dist /etc/nginx/sites
sudo mv /etc/nginx/sites/dist /etc/nginx/sites/paac
sudo systemctl restart nginx

