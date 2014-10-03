#AMASKO

##Dokumentation 29.09.2014, 23:29
###Struktur im Server:
neue Amaskowebsite liegt im "public_html". bitte nichts aendern.
die Ordner: "catalog.wci", "logfiles" und "stats" stammen aus der alten Anaskowebseite (pink Seite)


###Install Amasko

####Prerequisites
+ [Git](http://git-scm.com/)
+ [Node](http://nodejs.org/)

The Amasko source files are on github. To get the latest version clone it. 
```
$ git clone https://github.com/sepprenfer/amasko.git
```

Amasko is a website created with html5, css and javascript. Install it with npm.

```
$ sudo npm install
$ bower install
```

###Getting started
#### Run it locally

To run it locally just run 
```
$ broccoli serve
```
It will start a local webserver on port 4200. Open the website by clicking [AMASKO](http://localhost:4200).
Install the [chrome live reload pluging](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) to always see the latest version of the website while developing.


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
AMASKO was developped with [Brackets](http://brackets.io/?lang=en) und [Sublime](http://www.sublimetext.com/). both are very nice and completly free text editors.
