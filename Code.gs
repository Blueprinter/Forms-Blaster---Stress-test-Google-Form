function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Forms Blaster').setSandboxMode(HtmlService.SandboxMode.IFRAME);
};

var myFormID = '';
var howManyToSubmit = 5;//How many form submissions for EACH of the two functions to submit

/*
 * To make a copy of this file, click the File menu, and choose
   "Make a copy"

*/
