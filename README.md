# lvkaszusWebsite-Core

- https://lvkasz.us - Core Source Code of my public website (HTML, CSS and JavaScript + Flask for Python base for later integration with social media. lvkaszusSocialMediaAPI that is installed on my website is not included!)


## Folders in this repository

- errors_page-src : Custom HTTP error pages to be placed on preferably a separate server, so when your main server with a website goes down, the error pages will be visible anyway.

- lvwebflask-src : Source Code of this website, written in HTML, CSS, JavaScript and Python

⚠️ In these folders you will have to change a couple of things, see the Installation section for details ⚠️


## Own changes
⚠️ If this project doesn't match your needs, you can modify its code however you want to make it fit your needs! ⚠️

## Installation

If you want to deploy this website on your own server, follow these steps:

- Get a domain name and a server with preferably Linux installed on it. For free, you can get a server using Oracle Cloud and get up to 4 cores and 24GB of RAM to use on ARM64 architecture (overkill for this project, but if you want to deploy some other applications than that, it can be useful!)

- Point your domain name to your server by editing DNS records in your domain registrar. You can use Cloudflare DNS for this. If you want to use Cloudflare, you must change the NS records in your domain registrar pointing to Cloudflare (NS1: xxxxx.ns.cloudflare.com   NS2: xxxxx.ns.cloudflare.com) and then change the main DNS records (A, CNAME etc.) in Cloudflare Dashboard to point to your server. You also will get free SSL/TLS certificate for your domain.

- Log into your new server using SSH.

- Update the package lists and packages on your system. `sudo apt update && sudo apt upgrade` for example.

- Install Python3, Python3-pip and other useful packages on your system (Python3 may be already installed in your Linux distribution.) `sudo apt install git python3 python3-pip python3-venv build-essential libssl-dev libffi-dev python3-dev`

- Clone this Git repository using `git clone https://github.com/lvkaszus/lvkaszuswebsite-core` command. Move out the `errors_page-src` and `lvwebflask-src` folders from cloned Git repository. `cd lvkaszuswebsite-core/ && mv lvwebflask-src/ errors_page-src/ ../` You may need `errors_page-src` folder later if you want custom error pages appearing on your website if something goes wrong.

- When you moved out folders mentioned above, you can rename the `lvwebflask-src` folder to new name like `lvwebflask` if you want: `mv lvwebflask-src/ lvwebflask`

- Create a virtual environment for this website in Python using `python3 -m venv lvwebflask` command.

- Enter the Python virtual environment using `cd lvwebflask/ && source bin/activate`.


- ⚠️ Edit those files ⚠️:     (If you will not edit them, the website may not work correctly!)

    `lvwebflask.py` - Edit this if you don't want use custom error pages on another subdomain/domain, just remove all `@app.errorhandler` lines from this file.
    
    `gunicorn_config.py` - If you want to use GUnicorn for this project, you can set the bind port for this app by changing the last four digits in this `bind = '0.0.0.0:8000'` line. Else, you can use uWSGI or something else. We will use GUnicorn here and we will also bind it's port to nginx/Apache HTTP server later. Also change the access log and error log directory or leave to defaults.
    
    `templates/index.html`, `templates/about_me.html`, `templates/contact.html`, `templates/pgp.html` and also the `templates/info.html` - Change all `your-url-here.com` to your domain name (titles, meta tags, links, footers, PGP signature, images etc.), also change the links for your social media in `templates/index.html` file. 

    - If you want to integrate social media API with this project to show for example your followers or online status, get suitable API for Python, install it's libraries with `pip install`, modify the `lvwebflask.py` file accordingly and also add Flask variables to HTML files in `templates` folder. 
    
    - If you don't want such integration with this project, just remove the `<a class="social_media-link-telegram-offline" href="https://telegram.me/lvkaszus" target="_blank"><i class="fa-brands fa-telegram">&nbsp;</i>Telegram (<span id="tg_status-offline">● Offline</span>)</a>` line from `templates/index.html` file and also remove the `<span>` tag from `<a>` tag with class-name `social_media-link-telegram-online`.
    
    `static/javascripts/lvweb-core.js` - In this file, change the phrases in `const frazy` to your own phrases.
    
    `static/javascripts/languageselector.js` - You can set translations for specific parts of pages here.
    
    `static/javascripts/audioplayer.js` - You can point a .mp3 file here to your music in `let yourSongFile = ` line and also set a title of a song that you set earlier in `let YourSongName = ` line.
    
    `static/images/core/lvkaszus-logo.gif` - Upload your own site logo here in GIF format.
    
    `static/images/core/me/me_1.jpg` - If you want to show your picture on `your-url-here.com/about_me` page, then replace original file with yours.
    
    `static/files/music/your_song_here.mp3` - Upload your song that you like. It will be played on main index page. When you change name of this file to something different, update the `static/javascripts/audioplayer.js` script to match this filename and set the song title.
    
    `static/files/download/pgp_page/lvkaszus-PublicKey.pub` - Update this file with your PGP Public Key. If you will change name of this file, update it in `templates/pgp.html` HTML file.
    
    `static/files/download/pgp_page/lvkaszus-PublicKey.pub.sig` - Update this file with your PGP Public Key Signature. If you will change name of this file, update it in `templates/pgp.html` HTML file.
    
    All `.png` files and one `.ico` file in `static/` directory - Update those files with your Site Favicon to resolutions that are in filenames.
    
    `static/sitemap.xml` - Paste your sitemap in this file. (not necessary)
    
    `static/robots.txt` - Paste your robots.txt contents in here. (not necessary)
    - ⚠️ Default settings in here are to block Googlebot and other indexing bots on the internet. ⚠️
    
 
- And that's should be it for editing files.
- Install required Python libraries in your Python virtual environment: `pip3 install wheel Flask` 
    - ⚠️ If you want to use GUnicorn here, install it's package by also using this command: `pip3 install gunicorn`
    
- Create new directory in `/var/log` with name `lvwebflask` (if you want to use default settings for logging) and also the log files by using this command: `sudo mkdir /var/log/lvwebflask && sudo touch /var/log/lvwebflask/access.log /var/log/lvwebflask/error.log` and also update the permissions to your current user to make log files writable: `sudo chown -R YOUR_USER:YOUR_USERS_GROUP /var/log/lvwebflask`. (Replace YOUR_USER and YOUR_USERS_GROUP accordingly!)

- Run the website server by executing `run.sh` file: `bash run.sh`. Test it by using curl: `curl 0.0.0.0:8000`. If you see HTML code in your terminal screen, that's good! 😁

- Now, create a systemd service file to make Flask running after booting up your server by creating and editing service file. Enter the `sudo nano /etc/systemd/system/lvwebflask.service` command and paste this:

  ```
  [Unit]
  Description=lvkaszusWebsite-Flask - lvkaszusWebsite Flask Engine
  After=network.target

  [Service]
  User=YOUR_USER
  Group=YOUR_USERS_GROUP
  WorkingDirectory=/home/YOUR_USER/lvwebflask
  Environment="PATH=/home/YOUR_USER/lvwebflask/bin"
  ExecStart=/home/YOUR_USER/lvwebflask/bin/gunicorn -c /home/YOUR_USER/lvwebflask/gunicorn_config.py lvwebflask:app

  [Install]
  WantedBy=multi-user.target
  ```
  - ⚠️ Update directories in this file to match your directories where the project files are ⚠️
  

- Enable created systemd service: `sudo systemctl enable --now lvwebflask`

- Check if it is running correctly, if you see `Active: active (running)` this means that the website server is running.

<br><b>And from now.. The basic installation is complete! If you want to proxy this to an nginx/Apache HTTP, see the Apache Proxy or Nginx Proxy section.</b>

## Nginx Proxy

- Install nginx `sudo apt install nginx`, go to your nginx configuration folder and paste this into your site configuration file if you are using GUnicorn:

```
server {
    listen 80;
    listen [::]:80;
    # listen 443 ssl http2;
    # listen [::]:443 ssl http2;

    server_name YOUR_DOMAIN_NAME_HERE;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # ssl_certificate "YOUR CERTIFICATE FILE PATH HERE";
    # ssl_certificate_key "YOUR CERTIFICATE KEY FILE PATH HERE";

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
    
    # Redirect automatically to HTTPS. Uncomment line below when you are using TLS/SSL.
    # if ($https = '') { return 301 https://$host$request_uri; }
}
```
⚠️ Don't forget to remove `#` when you want to use HTTPS! Also change the `YOUR_DOMAIN_NAME_HERE` to your domain name and `YOUR CERTIFICATE FILE PATH HERE` + `YOUR CERTIFICATE KEY FILE PATH HERE` to your SSL/TLS certificate files path.

- Enable the site configuration file `sudo ln -s /etc/nginx/sites-available/FILENAME_OF_THE_NGINX_CONFIG_FILE /etc/nginx/sites-enabled/FILENAME_OF_THE_NGINX_CONFIG_FILE` and restart the Nginx server.

- Enable the port 80 and/or port 443 in your firewall rules!

<br><b>And from now.. The installation is complete with use of nginx Proxy! You can deactivate Python virtual environment by typing `deactivate` in your terminal and close the connection with your server.</b>

## Apache Proxy

- Install Apache2 `sudo apt install apache2`, go to your Apache2 configuration folder and paste this into your site configuration file if you are using GUnicorn:

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
        ServerName YOUR_DOMAIN_NAME_HERE
        ServerAdmin admin@localhost

        ProxyPreserveHost On
        ProxyRequests off
        ProxyPass / http://127.0.0.1:8000/ nocanon
        ProxyPassReverse / http://127.0.0.1:8000/

        AllowEncodedSlashes on

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        RewriteEngine on
        SSLCertificateFile YOUR_CERTIFICATE_FILE_PATH_HERE
        SSLCertificateKeyFile YOUR_CERTIFICATE_KEY_FILE_PATH_HERE
        SSLCertificateChainFile YOUR_CERTIFICATE_CHAIN_FILE_PATH_HERE

</VirtualHost>
</IfModule>
```

⚠️ Change the `YOUR_DOMAIN_NAME_HERE` to your domain name and certificate parameters path to your SSL/TLS certificate files path.

- Enable the site configuration file `sudo a2ensite YOUR_CONFIG_FILENAME` and restart the Apache2 server.

- Enable the port 80 and/or port 443 in your firewall rules!

<br><b>And from now.. The installation is complete with use of Apache Proxy! You can deactivate Python virtual environment by typing `deactivate` in your terminal and close the connection with your server.</b>

<br><br>

## Credits
- This project uses Font Awesome library. (https://github.com/FortAwesome/Font-Awesome)
- This project uses Fira Code font. (https://github.com/tonsky/FiraCode)
