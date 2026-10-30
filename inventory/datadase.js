use InventoryDB;

db.products.insertMany([
  {name: "Laptop", quantity: 10, price: 50000},
  {name: "Mobile", quantity: 20, price: 20000},
  {name: "Keyboard", quantity: 15, price: 1000},
  {name: "Mouse", quantity: 25, price: 500}
]);

db.products.createIndex({name: 1});

db.products.find({name: "Laptop"});

db.products.find({name: "Laptop"}).explain("executionStats");