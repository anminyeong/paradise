const Quest = require("../models/quest.model.js");

exports.selectSupportList = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    support_list : [
      {
        seq : 1,
        save_point : 100,
        buy_point : 100,
        price : 1000
      },
      {
        seq : 2,
        save_point : 200,
        buy_point : 200,
        price : 2000
      },
      {
        seq : 3,
        save_point : 300,
        buy_point : 300,
        price : 3000
      },
    ]
  });
}


exports.selectCompanyList = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    company_list : [
      {
        seq : 1,
        name : "우아한 형제들",
        picture : "picture1.jpg"
      },
      {
        seq : 2,
        name : "패스트 캠퍼스",
        picture : "picture2.jpg"
      },
      {
        seq : 3,
        name : "엔젤",
        picture : "picture3.jpg"
      },
    ]
  });
}

exports.requestSupport = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    item:{
      seq:1,
      type:0,
      name:"펭귄",
      content:"북극에 사는 귀여운 펭귄",
      picture: "penguin.jpg",
      buy_type:0,
      create_date: new Date()
    }
  });
}