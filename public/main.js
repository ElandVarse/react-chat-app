// var socket = io('http://localhost:3333')

document.getElementById('chat').addEventListener("submit", function(event){
    event.preventDefault();

    const author = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const messageObject = {
        author: author,
        message: message,
    }

    if(author.length && message.length){
        socket.emit('sendMessage', messageObject)
    }
    else{
        alert('Vai escrever nada nao amigo?')
    }

})


// $('#chat').submit(function(event){
//     event.preventDefault();
// })

// var author = $('input[name=username]').val();
// var message = $('input[name=message]').val();

// if(author.length && message.length) {
//     var messageObject = {
//         author: author,
//         message: message
//     }

// }