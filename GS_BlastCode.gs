function blastOne(id) {
  var allRzpnzz,allQuestionItems,allQuestionResponses,allAnswers,frm,i,j,L,lngth,lastRzpnz,
      newAnswer,newRezpnz,thisAnswer,thisItem,thisQuestion,questionType;
  
  myFormID = id?id:myFormID;
  
  if (!myFormID) {return;};

  frm = FormApp.openById(myFormID);
  allRzpnzz = frm.getResponses();
  L = allRzpnzz.length;
  
  lastRzpnz = allRzpnzz[L-1];
  
  allQuestionItems = frm.getItems();
  allQuestionResponses = lastRzpnz.getItemResponses();
  lngth = allQuestionResponses.length;
  //Logger.log('lngth: ' + lngth)
  
  allAnswers = [];
  for (i=0;i<lngth;i+=1) {
    thisAnswer = allQuestionResponses[i].getResponse();
    //Logger.log('thisAnswer: ' + thisAnswer)
    allAnswers.push(thisAnswer);
  };
  //Logger.log('allAnswers: ' + allAnswers)
  //Logger.log('allAnswers.length: ' + allAnswers.length)
  for (i=0;i<howManyToSubmit;i+=1) {
    newRezpnz = frm.createResponse();
    
    for (j=0;j<lngth;j+=1) {
      thisAnswer = allAnswers[j];
      thisQuestion = allQuestionItems[j];
      
      //Logger.log('thisAnswer: ' + thisAnswer);
      questionType = thisQuestion.getType();
      //Logger.log('questionType: ' + questionType)
      //Logger.log('j: ' + j)
      if (questionType === FormApp.ItemType.TEXT) {
        //Logger.log('it got here');
        thisItem = thisQuestion.asTextItem();
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.DATE) {
        //Logger.log('date item');
        thisItem = thisQuestion.asDateItem();
        thisAnswer = new Date(thisAnswer);
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.DATETIME) {
        //Logger.log('date item');
        thisItem = thisQuestion.asDateTimeItem();
        thisAnswer = new Date(thisAnswer);
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.TIME) {
        //Logger.log('TIME item');
        thisItem = thisQuestion.asTimeItem();
        
        var hour = thisAnswer.slice(0,2);
        var minute = thisAnswer.slice(thisAnswer.indexOf(":")+1);
        
        //Logger.log(hour + ":" + minute);
        newAnswer = thisItem.createResponse(hour, minute);
      } else if (questionType === FormApp.ItemType.MULTIPLE_CHOICE) {
        //Logger.log('MULTIPLE_CHOICE item');
        thisItem = thisQuestion.asMultipleChoiceItem();
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.LIST) {
        //Logger.log('MULTIPLE_CHOICE item');
        thisItem = thisQuestion.asListItem();
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.CHECKBOX) {
        //Logger.log('CHECKBOX item');
        thisItem = thisQuestion.asCheckboxItem();
        //Logger.log(thisAnswer)
        //Logger.log(typeof thisAnswer)
        if (typeof thisAnswer === 'object') {
          newAnswer = thisItem.createResponse(thisAnswer);//For a checkbox the answer is an array
        };
      } else {
        continue;
      };

      //Logger.log('thisItem: ' + thisItem);
      
      newRezpnz.withItemResponse( newAnswer );
    };
    //Logger.log('submit: ')
    newRezpnz.submit();//submit a new response
  };
};

function blastTwo(id) {
  var allRzpnzz,allQuestionItems,allQuestionResponses,allAnswers,frm,i,j,L,lngth,lastRzpnz,
      newAnswer,newRezpnz,thisAnswer,thisItem,thisQuestion,questionType;
  
  myFormID = id?id:myFormID;
  
  if (!myFormID) {return;};
  
  frm = FormApp.openById(myFormID);
  allRzpnzz = frm.getResponses();
  L = allRzpnzz.length;
  
  lastRzpnz = allRzpnzz[L-1];
  
  allQuestionItems = frm.getItems();
  allQuestionResponses = lastRzpnz.getItemResponses();
  lngth = allQuestionResponses.length;
  //Logger.log('lngth: ' + lngth)
  
  allAnswers = [];
  for (i=0;i<lngth;i+=1) {
    thisAnswer = allQuestionResponses[i].getResponse();
    allAnswers.push(thisAnswer);
  };
  
  for (i=0;i<howManyToSubmit;i+=1) {
    newRezpnz = frm.createResponse();
    
    for (j=0;j<lngth;j+=1) {
      thisAnswer = allAnswers[j];
      thisQuestion = allQuestionItems[j];
      
      //Logger.log('thisAnswer: ' + thisAnswer);
      questionType = thisQuestion.getType();
      //Logger.log('questionType: ' + questionType)
      //Logger.log('j: ' + j)
      if (questionType === FormApp.ItemType.TEXT) {
        //Logger.log('it got here');
        thisItem = thisQuestion.asTextItem();
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.DATE) {
        //Logger.log('date item');
        thisItem = thisQuestion.asDateItem();
        thisAnswer = new Date(thisAnswer);
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.DATETIME) {
        //Logger.log('date item');
        thisItem = thisQuestion.asDateTimeItem();
        thisAnswer = new Date(thisAnswer);
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.TIME) {
        //Logger.log('TIME item');
        thisItem = thisQuestion.asTimeItem();
        
        var hour = thisAnswer.slice(0,2);
        var minute = thisAnswer.slice(thisAnswer.indexOf(":")+1);
        
        //Logger.log(hour + ":" + minute);
        newAnswer = thisItem.createResponse(hour, minute);
      } else if (questionType === FormApp.ItemType.MULTIPLE_CHOICE) {
        //Logger.log('MULTIPLE_CHOICE item');
        thisItem = thisQuestion.asMultipleChoiceItem();
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.LIST) {
        //Logger.log('MULTIPLE_CHOICE item');
        thisItem = thisQuestion.asListItem();
        newAnswer = thisItem.createResponse(thisAnswer);
      } else if (questionType === FormApp.ItemType.CHECKBOX) {
        //Logger.log('CHECKBOX item');
        thisItem = thisQuestion.asCheckboxItem();
        //Logger.log(thisAnswer)
        //Logger.log(typeof thisAnswer)
        if (typeof thisAnswer === 'object') {
          newAnswer = thisItem.createResponse(thisAnswer);//For a checkbox the answer is an array
        };
      } else {
        continue;
      };

      //Logger.log('thisItem: ' + thisItem);
      
      newRezpnz.withItemResponse( newAnswer );
    };
    //Logger.log('submit: ')
    newRezpnz.submit();//submit a new response
  };
};
