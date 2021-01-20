import React, {useState} from "react";
import handleHelpfulAnswer from "../../actions/QA/handleHelpfulAnswer.js";
import handleReportAnswer from "../../actions/QA/handleReportAnswer.js";



const Answer = ({answer, handleQuant, fullLength}) => {

  const [answerHelpful, setAnswerHelpful] = useState({helpfulness: answer[1].helpfulness, helpfulStatus: false});
  const [answerReported, setAnswerReported] = useState(false);

  var date = new Date(answer[1].date);
  var dateString = date.toLocaleDateString({}, {timeZone:"UTC",month:"long", day:"numeric", year:"numeric"})

  let addBold = '';
  if (answer[1].answerer_name === "Seller") {
    addBold = 'addBold'
  }


  let reportStatus = "Report";
  let reportClass = "reportLink";
  if (answerReported === true){
    reportStatus = "Reported";
    reportClass = "";

  }


  return (
    <div className="answer">
      <span className="questionBody">A:</span> <span className="answerBody bodyIndent">{answer[1].body}</span>
      <br/><br/>
      <span className="answerInfoStyle">
      <span className="answerInfo">By <span className={addBold}>{answer[1].answerer_name}</span>, {dateString}</span>
      <span className="divider">|</span>
      <span>Helpful?&nbsp;</span>
      <span onClick={() => {if (answerHelpful.helpfulStatus === false) {
        setAnswerHelpful({helpfulness: answerHelpful.helpfulness + 1, helpfulStatus: true}); handleHelpfulAnswer(answer[0])}}} className="yesHelpfulA">Yes</span>
      <span>&nbsp;({answerHelpful.helpfulness})</span>
      <span className="divider">|</span>
      <span className={reportClass}  onClick={() => {
        if (answerReported === false) {
          setAnswerReported(true);
          handleReportAnswer(answer[0])
          }}}>{reportStatus}</span>
      </span>
    </div>
  )
};

export default Answer;