import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  // Handle dropdown change to update correct answer
  function handleCorrectAnswerChange(event) {
    const updatedQuestion = {
      ...question,
      correctIndex: parseInt(event.target.value), // update correct index
    };

    // Call the onUpdateQuestion function passed from parent to update the question in state
    onUpdateQuestion(updatedQuestion);

    // Optionally, update the question in your backend (json-server)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuestion),
    })
      .then((res) => res.json())
      .then((data) => console.log("Question updated:", data))
      .catch((error) => console.error("Error updating question:", error));
  }

  // Generate dropdown options based on answers
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleCorrectAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={() => onDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
