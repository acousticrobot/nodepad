window.onload = function() {

  var socket = io.connect('http://localhost:8888'),
      sendButton = document.getElementById("send"),
      content = document.getElementById("content"),
      name = document.getElementById("name"),
      file = document.getElementById("file"),
      field = document.getElementById("text");

  var messages = [content.innerHTML];

  socket.on('message', function (data) {
    console.log(data);
    if(data.message) {
      messages.push(data.message);
      var html = '';
      for(var i=0; i <messages.length; i++) {
        html += messages[i];
      }
      content.innerHTML = html;
      content.scrollTop = content.scrollHeight;
    } else {
        console.log("There is a problem:", data);
    }
  });

  sendButton.onclick = function() {
    var text = field.value;
    socket.emit('send', { message: text, name: name.value, file: file.value });
    field.value = "";
  };
}
