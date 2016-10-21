# PaintQuest

<iframe src="https://docs.google.com/presentation/d/1DAzAl6hBoVgYhI9QsRxjKcFxVN4sxI7pWDr_bfjmU-s/embed?start=false&loop=false&delayms=30000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

##Why?
* To have fun
* To learn
* To socialize and collaborate
* To succeed

##How?
By having fun, sharing our knowledge and laugh toghether we are going to solve complex problems and extend our common wisdom. Passion, knowledge and consistency will make us succeed.

_"One small idea may grow big if you share it with friends."_

##What?
The idea of PaintQuest (which by the way is just a workname and may be changed) is a browserbased shared canvas which can grow and be infinitely large. This means that all users connected will work on the same canvas in realtime. Think of it like a paint equivalent to Minecraft. Another similar application (but for text) is "Your world of text" which can be found here: https://www.yourworldoftext.com/.

_"Art is about expressions, whether it´s a painting, a poem or a piece of code. Express yourself and be an artist."_

##Environment
You will find a list of all the frameworks further down on this page. If you want to setup your own environment all those links contain good getting started guides to help you. To make it easy to get started we have made a preinstalled VMware image, just download it and you have everything you need to get started.

###Vmware image<br />
https://github.com/david-nossebro/paintquest/raw/master/xubuntu.zip.torrent <br />
Password: paint <br /><br />

Inside the virtual machine you find this git repository checked out in "/home/paint/paintrequest", start by open a terminal and go there and bring in the latest code with the following command:
```
cd /home/paint/paintquest/ && git pull
```

To bring up a small laboration you can enter the following command:
```
chromium-browser /home/paint/paintquest/src/mspaint/index.html & 
chromium-browser /home/paint/paintquest/src/mspaint/index.html & 
deepstream start
```
This should bring you a chromium browsers with two tabs with a canvas in each.

Visual studio code is installed if you want to start laborate. For get started guides and docs you find links to the different frameworks bellow. Most basic stuff is preinstalled.

###Slack<br />
https://paintquest.slack.com
This is where we hang out in sickness and health. Remember that no idea is to small and no problem to big. Come and be a part of the great team! 

###Spotify playlists<br />
https://open.spotify.com/user/snuggles88/playlist/2ud2VzegSwJEHBFYXlh6u7 <br />
Since this is an open source project and we are sharing everything we can as well share our taste in music as well. Feel free to add your songs! :)

##Frameworks
My suggestion of frameworks for this project is the following:

https://www.rethinkdb.com/ <br />
The open-source database for the realtime web

https://deepstream.io/ <br />
the open realtime server <br />
a fast, secure and scalable websocket & tcp server for mobile, web & iot

http://vuejs.org/ <br />
The Progressive JavaScript Framework

http://www.pixijs.com/ <br />
Create beautiful digital content with the fastest, most flexible 2D WebGL renderer.
