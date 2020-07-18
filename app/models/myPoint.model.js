const sql = require("./db.js");

// constructor
const MyPoint = function(customer) {
  this.email = customer.email;
  this.username = customer.username;
  this.password = customer.password;
  this.create_time = customer.create_time
};



MyPoint.create = (newCustomer, result) => {
  sql.query("INSERT INTO my_point SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created MyPoint: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

MyPoint.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM my_point WHERE user_email = '${email}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found my_point: ", res[0]);
      result(null, res);
      return;
    }

    // not found MyPoint with the id
    result({ kind: "not_found" }, null);
  });
};

MyPoint.getAll = result => {
  sql.query("SELECT * FROM my_point", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("my_point: ", res);
    result(null, res);
  });
};

MyPoint.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE my_point SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found MyPoint with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated my_point: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

MyPoint.remove = (id, result) => {
  sql.query("DELETE FROM my_point WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found MyPoint with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted my_point with id: ", id);
    result(null, res);
  });
};

MyPoint.removeAll = result => {
  sql.query("DELETE FROM my_point", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} my_point`);
    result(null, res);
  });
};

module.exports = MyPoint;
