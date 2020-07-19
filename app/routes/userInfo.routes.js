module.exports = app => {
  const userInfo = require("../controllers/userInfo.controller.js");
  const quest = require("../controllers/quest.controller.js");
  const support = require("../controllers/support.controller.js");
  const store = require("../controllers/store.controller.js");

  app.post("/user", userInfo.login);  //회원가입 및 로그인

  app.get("/quest", quest.selectQuestList)  //퀘스트 목록
  app.post("/quest" , quest.requestQuest)

  app.get("/support", support.selectSupportList)
  app.post("/support", support.requestSupport)

  app.get("/company", support.selectCompanyList)
  app.get("/store/item", store.selectStoreItems)
  app.post("/store/item", store.buyStoreItem)
  app.get("/user/item", store.myItemList)
  app.post("/store/item/use", store.setUsedItem) //내 아이템 사용, 미사용
};
