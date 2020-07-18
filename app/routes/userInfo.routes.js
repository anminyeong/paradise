module.exports = app => {
  const userInfo = require("../controllers/userInfo.controller.js");
  const quest = require("../controllers/quest.controller.js");
  const support = require("../controllers/support.controller.js");
  const store = require("../controllers/store.controller.js");

  // Create a new user
  // app.post("/user", userInfo.create);

  //login
  app.post("/user", userInfo.login);

  app.get("/quest", quest.selectQuestList)
  app.post("/quest" , quest.requestQuest)

  app.get("/support", support.selectSupportList)
  app.post("/support", support.requestSupport)

  app.get("/company", support.selectCompanyList)

  app.get("/store/item", store.selectStoreItems)
  app.post("/store/item", store.buyStoreItem)

  app.get("/user/item", store.myItemList)
  app.post("/store/item/use", store.setUsedItem) //내 아이템 사용, 미사용
  // // Retrieve all Customers
  // app.get("/customers", customers.findAll);

  // // Retrieve a single Customer with customerId
  // app.get("/customers/:customerId", customers.findOne);

  // // Update a Customer with customerId
  // app.put("/customers/:customerId", customers.update);

  // // Delete a Customer with customerId
  // app.delete("/customers/:customerId", customers.delete);

  // // Create a new Customer
  // app.delete("/customers", customers.deleteAll);
};
