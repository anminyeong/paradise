const Quest = require("../models/quest.model.js");

exports.selectQuestList = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    quest_list : [
      {
        seq : 1,
        title : "친환경 마크 찾기",
        type:1,
        content:"친환경 마크를 찾아서 인증해주세요.",
        point:100,
        is_success:0,
        picture:"test.jpg"
      },
      {
        seq : 2,
        title : "텀블러 챙기기",
        type:1,
        content:"텀블러 사용 인증을 해주세요.",
        point:100,
        is_success:0,
        picture:"test.jpg"
      },
      {
        seq : 3,
        title : "선풍기 사용하기",
        type:0,
        content:"선풍기 사용 인증을 해주세요.",
        point:100,
        is_success:0,
        picture:"test.jpg"
      },
      {
        seq : 4,
        title : "집 나가기 전 콘센트 뽑기",
        type:0,
        content:"콘센트를 인증해주세요.",
        point:100,
        is_success:0,
        picture:"test.jpg"
      },
      {
        seq : 5,
        title : "에코백 챙기기",
        type:0,
        content:"에코백을 인증해주세요.",
        point:100,
        is_success:0,
        picture:"test.jpg"
      }
    ]
  });
}


exports.requestQuest = (req, res) => {
  res.status(200).send({
    status : {
      code : 0,
      message: `정상`
    },
    success : 1 
  });
}