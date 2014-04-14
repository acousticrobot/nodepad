
An localhost collaborative note-taking app using sockets in node.

_notice: There are few security features in place. This app is intended to be shared with trusted users over a local network._

## Features

  * Uses sockets to create a chat-room style collaborative note pad  
  * Notes are saved to a markdown file in public/notes
  * Markdown and code stying are displayed on the front end

## Use

  * Fork the app to create your own nodepad
  * `npm install` and `node index.js`
  * Create a new note: public/notes/my_new_note.md
  * Navagate browsers to `your.ip.address:8888/user name/my_new_note`
  * To post text, use the `enter text` button
  * To enter code, use the `enter code` button

Posted user names and text will be appended to public/notes/my_new_note.md,
and will also appear on all user screens.
  
