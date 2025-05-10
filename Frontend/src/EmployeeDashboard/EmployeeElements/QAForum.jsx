import React, { useState, useEffect } from "react";
import axios from "axios";

function QAForum() {
  const employeeId = localStorage.getItem("user");
  const [departmentId, setDepartmentId] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const deptRes = await axios.get(`http://localhost:8080/${employeeId}`);
      setDepartmentId(deptRes.data.user.departmentId);

      const questionRes = await axios.get(`http://localhost:8080/question/emp/${employeeId}`);
      console.log(questionRes.data)
      setQuestions(questionRes.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/question", {
        questionText,
        employeeId,
        departmentId,
      });
      setQuestionText("");
      fetchData();
      alert("Question submitted successfully!");
    } catch (err) {
      alert("Failed to submit question.");
    }
  };

  

  const handleDeleteQuestion = async (questionId) => {
    if (!window.confirm("Are you sure you want to delete this question?")) return;
    
    try {
      await axios.delete(`http://localhost:8080/question/${questionId}`);
      fetchData();
      alert("Question deleted successfully!");
    } catch (err) {
      alert("Failed to delete question.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [employeeId]);

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Q&A Forum</h2>
        <p className="text-muted">Ask your questions and view responses from the admin.</p>
      </div>

      <div className="card mb-5 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Ask a Question</h5>
          <form onSubmit={submitQuestion}>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Write your question..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                rows="3"
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>

      <h4 className="mb-3">Your Questions</h4>
      {questions.length > 0 ? (
        questions
          .reverse()  
          .map((q) => (
            <div key={q._id} className="card mb-4 ">
              <div className="card-body">
                <h5>{q.questionText}</h5>
                <p className="text-muted mb-2">
                  <strong>Asked by:</strong> {q.employeeId.firstName} {q.employeeId.lastName}
                </p>

                {q.answers && q.answers.length > 0 ? (
                  <div className="bg-light p-3 rounded">
                    <h6 className="text-success">Admin Answer:</h6>
                    {q.answers.reverse().map((a,i) => (
                      <p key={a._id} className="mb-3 p-2 bg-white shadow-lg rounded-1">{i+1}. {a.answerText}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-warning">No answer yet.</p>
                )}

                {/* Admin Answering UI */}
                {employeeId === 'admin' && (
                  <form onSubmit={(e) => submitAnswer(e, q._id)} className="mt-3">
                    <textarea
                      className="form-control mb-2"
                      placeholder="Write admin answer..."
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      rows="2"
                      required
                    />
                    <button type="submit" className="btn btn-success">Submit Answer</button>
                  </form>
                )}

                {/* Delete Question Button */}
                {employeeId !== 'admin' && (
                  <button
                    onClick={() => handleDeleteQuestion(q._id)}
                    className="btn btn-sm btn-danger mt-3"
                  >
                    Delete Question
                  </button>
                )}
              </div>
            </div>
          ))
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
}

export default QAForum;
