var MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb'); 
var ObjectId = require('mongodb').ObjectId; 

const url = 'mongodb://nmtoan:uYzQSW3Cciw8p0rs@demo-mcare-shard-00-00-op5pw.mongodb.net:27017,demo-mcare-shard-00-01-op5pw.mongodb.net:27017,demo-mcare-shard-00-02-op5pw.mongodb.net:27017/test?ssl=true&replicaSet=DEMO-MCARE-shard-0&authSource=admin';

// MongoDB Create Collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.createCollection("users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// MongoDB Insert
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = { name: "Lan", pass: "123456789" };
//   db.collection("users").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// MongoDB Query
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var query = {address:""};
//   db.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoDB Delete
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myquery = { address: 'Mountain 21' };
//   db.collection("customers").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

// MongoDB Update
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { _id: new ObjectId("5a12a333cf72963f6c3b2785") };
  var newvalues = { name: "Lan", pass: "987654321" };
  db.collection("users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});