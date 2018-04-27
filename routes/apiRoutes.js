// ===============================================================================
// LOAD DATA
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ============================================================================
// ROUTING
// ============================================================================

module.exports = function (app) {

  // API GET Requests
  //---------------------------------------------------------------------------
  app.get("/api/tables", function (req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function (req, res) {
    res.json(waitListData);
  });

  // API POST Requests
  //---------------------------------------------------------------------------
  app.post("/api/tables", function (req, res) {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

};
