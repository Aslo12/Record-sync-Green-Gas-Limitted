import React, { useState, useEffect } from "react";
import axios from "axios";

function QAForum() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [answerText, setAnswerText] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [editingAnswerId, setEditingAnswerId] = useState(null);

  const fetchQA = async () => {
    try {
      const questionsRes = await axios.get("http://localhost:8080/question");
      const answersRes = await axios.get("http://localhost:8080/ans");
      setQuestions(questionsRes.data.user);
      setAnswers(answersRes.data.Ans);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchQA();
  }, []);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    if (!answerText.trim()) return alert("Answer cannot be empty!");
    try {
      const data = { answerText, questionId: selectedQuestionId };

      if (editingAnswerId) {
        const res = await axios.put(`http://localhost:8080/ans/${editingAnswerId}`, data);
        if (res.data.msg === "Answer updated successfully!") {
          alert("Answer updated successfully!");
        }
      } else {
        const res = await axios.post("http://localhost:8080/ans", data);
        if (res.data.msg === "Success") {
          alert("Answer submitted successfully!");
        }
      }

      setAnswerText("");
      setSelectedQuestionId("");
      setEditingAnswerId(null);
      fetchQA();
    } catch (error) {
      console.error("Error submitting answer:", error);
      alert("Server error!");
    }
  };

  const handleDeleteAnswer = async (answerId) => {
    if (!window.confirm("Are you sure you want to delete this answer?")) return;

    try {
      const response = await axios.delete(`http://localhost:8080/ans/${answerId}`);
      console.log(response);
      if (response.data.msg === "Deleted") {
        alert("Answer deleted successfully!");
        fetchQA();
      }
    } catch (error) {
      console.error("Error deleting answer:", error);
      alert("Server error!");
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    if (!window.confirm("Are you sure you want to delete this question and all its answers?")) return;

    try {
      const response = await axios.delete(`http://localhost:8080/question/${questionId}`);
      console.log(response);
      if (response.data.msg.includes("Deleted")) {
        alert("Question and answers deleted successfully!");
        fetchQA();
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Server error!");
    }
  };

  return (
    <div className="container bg-light text-muted py-4">
      <h2 className="mb-4">Admin Answer Forum</h2>

      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        [...questions]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((question) => (
            <div key={question._id} className="card mb-4 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-0">{question.questionText}</h5>
                  <button
                    onClick={() => handleDeleteQuestion(question._id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete Question
                  </button>
                </div>
                <p><strong>Asked by:</strong> {question.employeeId.firstName} {question.employeeId.lastName}</p>
                <p><strong>Department:</strong> {question.departmentId.deptName}</p>

                {/* Answer List */}
                {[...answers]
                  .filter((ans) => ans.questionId === question._id)
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((ans) => (
                    <div key={ans._id} className="card mt-3 bg-light border">
                      <div className="card-body">
                        <p>{ans.answerText}</p>
                        <p className="mb-2 text-muted">Answered by: Admin</p>
                        <button
                          onClick={() => {
                            setEditingAnswerId(ans._id);
                            setAnswerText(ans.answerText);
                            setSelectedQuestionId(question._id);
                          }}
                          className="btn btn-sm btn-warning me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAnswer(ans._id)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                {/* Answer Form */}
                <form onSubmit={handleSubmitAnswer} className="mt-4">
                  <div className="mb-3">
                    <label htmlFor={`answer-${question._id}`} className="form-label">
                      {editingAnswerId ? "Update Answer" : "Your Answer"}
                    </label>
                    <textarea
                      className="form-control"
                      id={`answer-${question._id}`}
                      rows="3"
                      value={selectedQuestionId === question._id ? answerText : ""}
                      onChange={(e) => {
                        setAnswerText(e.target.value);
                        setSelectedQuestionId(question._id);
                      }}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {editingAnswerId ? "Update Answer" : "Submit Answer"}
                  </button>
                </form>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default QAForum;
