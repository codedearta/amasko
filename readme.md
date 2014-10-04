#AMASKO

##Dokumentation 29.09.2014, 23:29
###Struktur im Server:
neue Amaskowebsite liegt im "public_html". bitte nichts aendern.
die Ordner: "catalog.wci", "logfiles" und "stats" stammen aus der alten Anaskowebseite (pink Seite)


###Install Amasko

####Prerequisites
+ [Git](http://git-scm.com/)
+ [Node](http://nodejs.org/)
+ Texteditor [Sublime](http://www.sublimetext.com/) or [Brackets](http://brackets.io/?lang=en)

####Comandline
#####Mac
Hit cmd+spacebar and type terminal. It will open a termnal for you. Change to the directory where you want to work with the amasko sources.
#####Windows
open the commandline as administrator. Change to the directory where you want to work with the amasko sources.


The Amasko source files are on github. To get the latest version clone it. 
```
$ git clone https://github.com/sepprenfer/amasko.git
```

Amasko is a website created with html5, css and javascript. Install it with npm.

MAC:
```
$ sudo npm install
$ bower install
```
WINDOWS:
```
$ npm install
$ bower install
```


###Getting started
#### Run it locally

To run it locally just run 
```
$ broccoli serve
```
It will start a local webserver on port 4200. Open the website by clicking http://localhost:4200.
Install the [chrome live reload pluging](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) to always see the latest version of the website while developing.

####Deploy the latest changes to AZURE

To deploy AMASKO you must have a github-account. Just create a new one on https://github.com so that I can add you as a contributor.
After that, got to your AMASKO root-directory and use the following commands.

#####Mac
```
$ rm -rf public_html
```

#####Windows
```
$ rmdir /S public_html
```

Then the commands for both operating systems are the same
```
$ broccoli build public_html
$ git add --all
$ git commit -m "deployment"
$ git push
```
Done! You can now browse the website on http://amasko.azurewebsites.net/
To deploy the Amasko website to amasko.ch just transfer your local public_html folder via ftp to amasko.ch.

####Folder Structure

package.json
bower.json
brocfile.js
\- app
&nbsp;&nbsp;&nbsp; index.html
&nbsp;&nbsp;&nbsp; app.js
&nbsp;&nbsp;&nbsp; app.scss
&nbsp;&nbsp;&nbsp;\+ img
&nbsp;&nbsp;&nbsp;\- styles
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; colours.scss
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...
&nbsp;&nbsp;&nbsp;\- views
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ home
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ treatments
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ coupons
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ gallery
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ contact

#####Other important git commands:
```
$ git add --all // adds all the changes to the local repository
$ git commit -m "add some comments here."  // commits the changes to the local repository
$ git push // pushes the changes to github
$ git pull // pullls the latest source from github
```

#####Editors
AMASKO was developped with [Brackets](http://brackets.io/?lang=en) und [Sublime](http://www.sublimetext.com/). Both are very nice and completly free text editors.
