import "./question.css"
import { useState } from "react";

const Question = ({data, setAnswer, answers}) => {

  const [updateAnswer, setUpdateAnswer] = useState([]);

  const setStyle = () => {
    let arr = [] ;
    answers.forEach(x => {
      arr.push(x.answer)
    });
    setUpdateAnswer(arr);
  };

  return (
      <div className="question">
        <p>{data.category}</p>
        <h2>
            {data.question}
        </h2>
        {
          <>
              {data.answers.map((element, id) => (
                <div className={updateAnswer.indexOf(element) >= 0 ? "answer selected" : "answer"} 
                  onClick={() => {
                    setAnswer(data.question, element); 
                    setStyle()
                  }} 
                  key={id}>
                  {element}
                </div>
              ))}
          </>
        }
      </div>
  )
}

export default Question