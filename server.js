const port = 3454

var lang = 0

var FileStreamRotator = require('file-stream-rotator')
var express = require("express")
var fs = require('fs')
var morgan = require('morgan')
var path = require("path")
var bodyParse = require('body-parser')

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

app.listen(port, function() {
	console.log("App listening on port:", port)
})

//general error handler
function handleError(res, reason, message, code) {
	res.status(code || 500).json({"error": message})
}

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/profile.html')
}) 	

app.get('/service/:id', function(req, res) {
	if (req.params.id == ('lang')) {
		lang++
		if(lang > 2) {
			lang = 0
		}
		res.json({l: lang})
	}
})

app.use(express.static(__dirname + "/public"))
app.use(bodyParse.json());