const io = require('socket.io')(3000)

users = {}

io.on('connection', socket => {
    console.log("New user")
    socket.on('msg-send', message =>{
        socket.broadcast.emit('chat-msg', message)
    })
    socket.on('new-user', user =>{
        user[socket.id] = user
        socket.broadcast.emit('join',user)
    })
})