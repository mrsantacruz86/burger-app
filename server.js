// ============================================================================
// DEPENDENCIES
// ============================================================================
const express = require("express");
const bodyParser = require("body-parser");
 
// ============================================================================
// EXPRESS CONFIGURATION
// ============================================================================
const app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ============================================================================
// ROUTER
// ============================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ============================================================================
// LISTENER (This code "starts" our server)
// ============================================================================
app.listen(PORT, function() {
  console.log(`App listening on: localhost:${PORT}/`);
});
