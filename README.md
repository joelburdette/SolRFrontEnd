# SolRFrontEnd
Front end web app for accessing a SolR database containing email documents

##Setup

Install [NodeJS] (https://nodejs.org/en/).

Download and unzip this git repo.

Navigate in the command line to the root of this repository in the unzipped repo.

Run the following commands to install the appropriate tools:
```
$ npm i react react-dom --save

$ npm i solr-faceted-search-react --save

$ npm i browserify babelify babel-preset-react babel-preset-react babel-preset-es2015 babel-preset-stage-2 --save-dev
```

Make sure you are still at the root of the project.

For Windows, run the following:
```
node_modules\.bin\browserify index.js --require react --require react-dom --transform [ babelify --presets [ react es2015 stage-2 ] ] --standalone FacetedSearch -o web.js

```

For Linux, run the following:
```
$ ./node_modules/.bin/browserify index.js \
        --require react \
        --require react-dom \
        --transform [ babelify --presets [ react es2015 stage-2 ] ] \
        --standalone FacetedSearch \
        -o web.js
```

Go into the index.js and change the value of the url to that of a SolR database of your choice.

Now, you should be able to open the index.html file in a browser window.

If you have problems with things not showing up, check the developer tools of your browser (Ctrl+j for Chrome), and, if the console has an error involving CORS access, install a [plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) from the Chrome web store or fix the server settings to allow CORS.

