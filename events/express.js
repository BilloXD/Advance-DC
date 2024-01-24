const express = require("express");
const app = express();

const server = app.listen(5000, () => {
  console.log(" _______________________________");
  console.log("");
  console.log("| WEB-WINDOW POWERED BY EXPRESS |");
  console.log(" _______________________________");
  console.log("");
  console.log("| /./\\//? Booting Client ...... |");
  console.log("| Please be patient ........... |");
  console.log(" _______________________________");
  console.log("");
  console.log("| Use \"kill 1\" in shell if stuck|");
  console.log(" _______________________________");
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://media.discordapp.net/attachments/1149279708924629003/1195355825355620372/standard.gif?ex=65bceb5d&is=65aa765d&hm=bf022e079f3118f7b4cd600ad747ced4c8cf1246e0ee42c8ab6eb36a4e0ee12e&=" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>
  `);
});
