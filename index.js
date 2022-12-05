const functions = require("firebase-functions");
const server = require('./src/app');
const cors = require('cors')({"origin":true});
server.use(cors);
/*
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
});
*/

exports.app = functions.https.onRequest(server);