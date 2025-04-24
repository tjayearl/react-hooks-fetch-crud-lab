import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  // Handle changing the answer in the dropdown
  const handleAnswerChange = (event) => {
    const updatedQuestion = {
      ...question,
      correctIndex: parseInt(event.target.value),
    };
    onUpdateQuestion(updatedQuestion);
  };

  return (
    <li>
      <h3>{question.prompt}</h3>
      <select
        value={question.correctIndex}
        onChange={handleAnswerChange}
      >
        {question.answers.map((answer, index) => (
          <option key={index} value={index}>
            {answer}
          </option>
        ))}
      </select>
      <button onClick={() => onDeleteQuestion(question.id)}>Delete</button>
    </li>
  );
}

export default QuestionItem;
