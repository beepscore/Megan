# Purpose
Do node express tutorial as a refresher.

# Reference

## Node.js Tutorial for Beginners / Express 16 - 22 
thenewboston
https://www.youtube.com/watch?v=WH5qsGnFkBM&index=16&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_

## express
http://expressjs.com/en/starter/installing.html

## Node.js Tutorial in VS Code
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial

# Results

## how to run

### command line

    DEBUG=Megan:* npm start

terminal output

    > megan@0.0.0 start /Users/stevebaker/Documents/projects/javascriptProjects/NodeProjects/thenewboston-tutorials/Megan
    > node ./bin/www

in browser, enter  http://localhost:3000/

    GET / 200 13.267 ms - 207
    GET /stylesheets/style.css 200 6.076 ms - 111
    GET /favicon.ico 404 2.158 ms - 1666

### visual studio code
select file www

menu Debug / Start debugging

debug console output

    Launch configuration created based on 'package.json'.
    Debugging with inspector protocol because Node.js v9.2.1 was detected.
    node --inspect-brk=25437 bin/www 
    Debugger listening on ws://127.0.0.1:25437/cb2ef503-7224-49c0-a282-d444cf858e63
    Debugger attached.

### www
uses app to create server i.e. calls createServer(app)

### app.js
sets app = express()
app.js routes requests

## ejs embedded javascript
.ejs file contains html, optionally contains javascript embedded inside <%=  %>
when using a variable, use = e.g. <%=title  %>
