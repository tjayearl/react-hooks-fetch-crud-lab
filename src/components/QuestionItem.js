import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDelete() {
    onDeleteQuestion(id); // Call the delete function passed via props
  }

  function handleChangeAnswer(event) {
    const updatedQuestion = {
      ...question,
      correctIndex: parseInt(event.target.value),  // Update the correct answer index
    };
    onUpdateQuestion(updatedQuestion);
  }

  return (
    <li>
      <p>{prompt}</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <select value={correctIndex} onChange={handleChangeAnswer}>
        {answers.map((answer, index) => (
          <option key={index} value={index}>
            {answer}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default QuestionItem;
