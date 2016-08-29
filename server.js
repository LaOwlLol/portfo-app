const port = 3454

var FileStreamRotator = require('file-stream-rotator')
var express = require("express")
var fs = require('fs')
var morgan = require('morgan')
var path = require("path")

var app = express()
var logDirectory = path.join(__dirname, 'log')


//make sure directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

//create rotating stream
var accessLogStream = FileStreamRotator.getStream({
	date_format: 'YYYYMMDD',
	filename: path.join(logDirectory, 'access-%DATE%.log'),
	frequency: 'daily',
	verbose: false	
})

//setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.use(express.static(__dirname + "/public"))

app.listen(port, function() {
	console.log("App listening on port:", port)
})

/*app.get('/', function(req, res) {
	
});*/
