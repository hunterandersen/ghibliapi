const app = require('./src/app')
const functions = require("firebase-functions");
//const port = process.env.PORT || 3000

// app.listen(port, () => {
//   console.log('JSONPlaceholder listening on http://localhost:' + port)
// })

exports.app = functions.https.onRequest(app);