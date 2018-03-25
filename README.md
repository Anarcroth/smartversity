![Moon Moon logo](./logo-wolf-blue.png)

**all you need to improve your learning in one place**

---

## Setup and Installation

The **STUDIFY** platform consists of two components - a *react.js* based dashboard + a *CMS* / php backend with lampp.

### Dashboard setup

clone the repo

```git clone https://github.com/Anarcroth/smartversity.git```

navigate to the cloned repo, then into the dashboard directory

```cd smartversity/dashboard```

and do an npm install and run

```npm install```
```npm start```

---

### CMS and lampp setup

This is the more tricky part of the setup, since you have to run locally the php backend in order get the database onto the platform.
We recommend using xampp/lampp.
Download xampp for your OS from [here](https://www.apachefriends.org/download.html)

For Linux:
change the permissions on your downoad:
```chmod 755 xampp-linux-*-installer.run```

Then run the installer:
```sudo ./xampp-linux-*-installer.run```

The installation directory is */opt/lampp*

In order to start the service run:
```sudo /opt/lampp/lampp start```

After that you will an Apache server and MySQL database running.

Stopping xampp is done in a similar way:
```sudo /opt/lampp/lampp stop```

*Note* - you might be running an Apache server in the background already, in order to allow for xampp to run properly, stop your apache server by running:
```sudo service apache2 stop```

If everything is running you should be able to visit:
```http://localhost```
and see the default dashboard.

For more information and questions, visit [this](https://www.apachefriends.org/faq_linux.html)

---

Now in order for you to run smartversity locally, we have to make a few files in the lampp.

You need to move the smartversity directory to:
```cp -r smartversity /opt/lampp/htdocs```

Next you would need to enable virtual hosting through the `httpd_vhosts.conf`
We recommend to comment out the first two virtual hosts and enter a new one with this setup:

```
<VirtualHost *:80>
    DocumentRoot "/opt/lampp/htdocs/"
    ServerName owl.icc
    <Directory "/opt/lampp/htdocs/">
        Options All
        AllowOverride All
    </Directory>
</VirtualHost>
```

This tells xampp where to find the setup `php` files in order to manage to web page.

After that move the changed file into the apache2 folder for available sites:
```mv httpd_vhosts.conf /etc/apache2/sites-available```

*Note* - If you don't have a running apache2 server you can make a setup through [here](https://www.digitalocean.com/community/tutorials/how-to-configure-the-apache-web-server-on-an-ubuntu-or-debian-vps)

Now you need to update your hosts file in order for the `localhost` to see what namespace to put:
```nano /etc/hosts```

and enter below the last host:
```127.0.1.1       owl.icc```

After these steps, if you run:
```sudo /opt/lampp/lampp start```

you should be able to start the server and go to your localhost and see the platform!
