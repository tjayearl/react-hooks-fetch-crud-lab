import React, { useState } from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  const [localCorrectIndex, setLocalCorrectIndex] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    onDelete(id);
  }

  function handleCorrectAnswerChange(event) {
    const newValue = parseInt(event.target.value);
    setLocalCorrectIndex(newValue); 
    onUpdate(id, newValue); 
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          name="correctIndex"
          value={localCorrectIndex}
          onChange={handleCorrectAnswerChange}
        >
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
