window.onload = function() {

  var nodeBook = nodeBook === undefined ? {} : nodeBook ;
  if (typeof nodeBook !== "object") {
    throw new Error("nodeBook is not an object!");
  }

  var socket = io.connect('http://localhost:8888'),
      textButton = document.getElementById("send-text"),
      codeButton = document.getElementById("send-code"),
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

      if (prettyPrint) {
        prettyPrint();
      }
    } else {
        console.log("There is a problem:", data);
    }
  });

  textButton.onclick = function() {
    if (field.value !== "") {
      socket.emit('send', { message: field.value, name: name.value, file: file.value });
      field.value = "";
    }
  };

  codeButton.onclick = function () {
    if (field.value !== "") {
      field.value = "```\n" + field.value + "\n```";
      socket.emit('send', { message: field.value, name: name.value, file: file.value });
      field.value = "";
    }
  }
}
