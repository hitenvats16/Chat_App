const socket = io('http://localhost:3000')
const msg_form = document.querySelector(".msg_form")
const msg_inp = document.querySelector("#msg_input")
const msg_container = document.querySelector(".msg_container")
const user = window.prompt("What is your name? ")
document.querySelector('#greet').innerText = `Hi, ${user}`
user_join('You Joined')
socket.emit('new-user',user)

socket.on('chat-msg', data => {
    append_msg(data)
})

socket.on('join', d =>{
    user_join(`${d} joined`)
})

msg_form.addEventListener('submit', e => {
    e.preventDefault()
    let msg = `${user} : `+msg_inp.value
    socket.emit('msg-send', msg)
    append_client(msg)
    msg_inp.value = ''
})

function append_msg(message){
    const msg_pol = document.createElement('div')
    msg_pol.classList.add("msg")
    msg_pol.innerText = message
    msg_container.appendChild(msg_pol)
}

function append_client(message){
    const msg_pol = document.createElement('div')
    msg_pol.classList.add("client_msg")
    msg_pol.innerText = message
    msg_container.appendChild(msg_pol)
}

function user_join(user){
    const msg_pol = document.createElement('h1')
    msg_pol.classList.add("user_joined")
    msg_pol.innerText = `${user}`
    msg_container.appendChild(msg_pol)
}

