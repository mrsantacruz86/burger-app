const connection = require('./connection');

// Print questionmarks in the quert string
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {arr.push("?")}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
	all: function (tableInput, cb) {
		// var queryString = "SELECT * FROM ?";
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function (table, cols, vals, cb) {
		var queryString = `INSERT INTO ? (${cols.toString()})
		VALUES(${printQuestionMarks(vals.length)})`;

		console.log(queryString);

		connection.query(queryString, [table, vals], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// An example of objColVals would be {name: panther, sleepy: true}
	update: function (table, objColVals, condition, cb) {
		var queryString = `UPDATE ${table} 
		SET ${objToSql(objColVals)}	WHERE ${condition}`;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	delete: function (table, condition, cb) {
		var queryString = `DELETE FROM ${table} WHERE ?`;

		connection.query(queryString, condition, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};
// Export the orm object for the model (cat.js).
module.exports = orm;