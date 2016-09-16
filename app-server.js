var express = require('express');
var _ = require('underscore');
var questions = require('./questions');
var app = express();

const SPEAKER = 'speaker';
const MEMBER = 'audience';
const DEFAULT_TITLE = 'Untitled Presentation';
const DEFAULT_RESULTS = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
};

var connections = [];
var title = DEFAULT_TITLE;
var audience = [];
var speaker = {};
var currentQuestion = false;
var results = DEFAULT_RESULTS;

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {

    socket.once('disconnect', function() {

        const member = _.findWhere(audience, {id: this.id});
        if (member) {
            audience.splice(audience.indexOf(member), 1);
            io.sockets.emit('audience', audience);
            console.log("Left: %s (%s members connected)", member.name, audience.length);
        } else if(this.id === speaker.id) {
            console.log("%s has left. '%s' is over.", speaker.name, title);
            speaker = {};
            title = DEFAULT_TITLE;
            io.sockets.emit('end', {title, speaker: ''});
        }
        connections.splice(connections.indexOf(socket),
        1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining", connections.length)
    });

    socket.on('join', function(payload) {
        const newMember = {
            id: this.id,
            name: payload.name,
            type: MEMBER,
        };
        this.emit('joined', newMember);
        audience.push(newMember);
        io.sockets.emit('audience', audience);
        console.log("Audience joined: %s", payload.name);
    });

    socket.on('start',  function(payload) {
        speaker = {
            name: payload.name,
            id: this.id,
            type: SPEAKER,
        };
        this.emit('joined', speaker);
        title = payload.title;
        io.sockets.emit('start', {title: payload.title, speaker: speaker.name});
        console.log('Presentation Started: %s by %s', payload.title, speaker.name);
    });

    socket.on('ask', function(question) {
        currentQuestion = question;
        results = DEFAULT_RESULTS;
        io.sockets.emit('ask', currentQuestion);
        console.log("Question asked: '%s'", question.q);
    });

    socket.on('answer', function(payload) {
        results[payload.choice]++;
        io.sockets.emit('results', results);
        console.log("Answer: '%s' - %j", payload.choice, results);
    });

    socket.emit('welcome', {
        title,
        audience,
        speaker: speaker.name,
        questions,
        currentQuestion,
        results,
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);
});

console.log("Polling server is running at 'http://localhost:3000'");
