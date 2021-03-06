const socketIO = require('socket.io');

const {Game} = require('../controllers/game');
const {Canvas} = require('../controllers/canvas');
const {Message} = require('../controllers/message');
const {Room} = require('../controllers/room');
const {Disconnect} = require('../controllers/disconnect');

module.exports.init = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('CONNECTION!!!!');

    /* Socket Lifecycle Listeners */
    /* User disconnects from server */
    socket.on('disconnect', () => {
      new Disconnect(io, socket).onDisconnect();
    });

    /* Game Change Listeners */
    /* Create Game */
    socket.on('createGame', (gameCreationData) => {
      new Room(io, socket).createRoom(gameCreationData.gameConfiguration,
        gameCreationData.userData);
    });

    /* User join events */
    socket.on('joinRoom', (joinData) => {
      new Room(io, socket).joinRoom(joinData.userData, joinData.inviteCode);
    });

    socket.on('joinRandomRoom', (joinData) => {
      new Room(io, socket).joinRandomRoom(joinData.userData);
    });

    /* Canvas related events */
    /* Drawing event */
    socket.on('drawingEvent', (drawingData) => {
      new Canvas(io, socket).emitDrawing(drawingData);
    });

    /* Clear canvas event */
    socket.on('clearCanvas', () => {
      new Canvas(io, socket).clearCanvas();
    });

    /* Undo Canvas event */
    socket.on('undo', () => {
      new Canvas(io, socket).emitUndo();
    });

    /* Redo Canvas event */
    socket.on('redo', () => {
      new Canvas(io, socket).emitRedo();
    });

    socket.on('saveCanvasState', () => {
      new Canvas(io, socket).emitSaveCanvasState();
    });

    /* Game logic and message events */
    /* Start timer on the running game instnace */
    socket.on('startTimer', () => {
      new Game(io, socket).startTimer(rooms[socket.roomId].settings.roundLength,
        true);
    });

    /* User chat message event */
    socket.on('chatMessage', (messageData) => {
      new Message(io, socket).onMessage(messageData.message);
    });

    /* User start game event */
    socket.on('startGame', () => {
      new Game(io, socket).startGame();
    });

    socket.on('getPlayers', () => {
      new Room(io, socket).sendUsers();
    });

    socket.on('chooseWord', (word) => {
      new Game(io, socket).selectWord(word);
    });

    socket.on('disconnectPlayer', (userId) => {
      new Room(io, socket).disconnectUser(userId);
    });

    socket.on('getGameData', () => {
      new Game(io, socket).sendGameData();
    });

  });

  return io;
};
