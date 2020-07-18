const Quest = require("../models/quest.model.js");

exports.selectStoreItems = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    item_list : [
      {
        seq : 1,
        type : 1,
        name : "곰 에코백",
        content : "귀여운 곰 그림이 있는 에코백",
        picture : "picture.jpg",
        buy_type : 0,
        price : 300,
        is_buy : 0
      },
      {
        seq : 2,
        type : 0,
        name : "곰",
        content : "귀여운 곰",
        picture : "picture.jpg",
        buy_type : 0,
        price : 300,
        is_buy : 1
      },
      {
        seq : 3,
        type : 2,
        name : "오로라",
        content : "오로라가 있는 멋진 배경",
        picture : "picture.jpg",
        buy_type : 0,
        price : 300,
        is_buy : 0
      },
      {
        seq : 4,
        type : 1,
        name : "여우 모자",
        content : "아기자기 한 귀여운 모자",
        picture : "picture.jpg",
        buy_type : 0,
        price : 300,
        is_buy : 1
      },
    ]
  });
}

exports.buyStoreItem = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    success : 1
  });
}


exports.myItemList = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    item_list:[
      {
          seq:1,
          type:1,
          name:"텀블러",
          content:"토끼 모양 텀블러",
          picture:"picture.jpg",
          buy_count:1,
          is_use:1,
          left_date :30
      },{
        seq:2,
        type:0,
        name:"오리",
        content:"흰색 오리",
        picture:"picture.jpg",
        buy_count:1,
        is_use: 1,
        left_date :30
      },{
        seq:3,
        type:2,
        name:"하늘색 배경",
        content:"하늘색 바탕의 기본 배경",
        picture:"picture.jpg",
        buy_count:1,
        is_use: 1,
        left_date :20
      },{
        seq:4,
        type:0,
        name:"고양이",
        content:"숏다리 먼치킨",
        picture:"picture.jpg",
        buy_count:1,
        is_use: 1,
        left_date :30
      }
  ]
  });
}

//내 아이템 사용 및 미 사용
exports.setUsedItem = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    success : 1
  })
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