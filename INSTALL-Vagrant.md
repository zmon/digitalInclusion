Summary
=======
Have error when trying to run Gulp.


Create Virtual box
==================

````
vagrant init ubuntu/trusty64
vagrant up
vagrant ssh
````

Install helpers
===============

````
sudo apt-get install git
````


Install Mean
============

From http://learn.mean.io/

Install Node
------------

````
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get update
sudo apt-get install nodejs
````

Install Prerequisite Packages
-----------------------------

````
sudo npm install -g gulp
sudo npm install -g bower
````

Install MEAN CLI
----------------

````
sudo npm install -g mean-cli 
````

Testing
-------

````
$ mean init myApp
$ cd myApp && npm install
$ gulp
````

You will get this error

````
module.js:327
    throw err;
    ^

Error: Cannot find module 'end-of-stream'
````

     npm cache clean
     bower cache clean
     npm update -g npm
     sudo npm update -g npm
     sudo npm update -g gulp
     sudo npm update -g bower


rm -rf node_modules
npm install

no ~/.bashrc
# add the export line which was /usr/lib/node_modules in my case:
export NODE_PATH="/usr/lib/node_modules"
