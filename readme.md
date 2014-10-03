#AMASKO

##Dokumentation 29.09.2014, 23:29
###Struktur im Server:
neue Amaskowebsite liegt im "public_html". bitte nichts aendern.
die Ordner: "catalog.wci", "logfiles" und "stats" stammen aus der alten Anaskowebseite (pink Seite)


###Install Amasko

Amasko is a website created with html5, css and javascript. Install it with npm.

```
$ sudo npm install
$ bower install
```
Amasko requires [Node](http://nodejs.org/) and [Git](http://git-scm.com/).

###Getting started
#### Run it locally

To run it locally just run 
```
$ broccoli serve
```
It will start a local webserver on port 4200. Open the website by clicking [AMASKO](http://localhost:4200).
Install the [chrome live reload pluging](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) to always see the latest version of the website while developing.

#### Folder structure


├── app
│   ├── img
│   ├── styles
│   ├── views
│   ├── index.html
│   ├── app.js
│   ├── app.scss
├── package.json
├── bower.json
├── brocfile.js