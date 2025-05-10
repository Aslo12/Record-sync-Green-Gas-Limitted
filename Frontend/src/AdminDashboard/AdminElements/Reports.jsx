import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Reports() {
  const {id} = useParams();
  let [report, setReports]=useState();

  const fetchReports = async()=>{
    await axios.get(`http://localhost:8080/initiate/reports`)
    .then(res=>setReports(res.data))
    .catch(err=>console.error(err));
  }
  useEffect(()=>{
    fetchReports();
  },[])
  if (!report) return <div>Loading reports...</div>;

  return (
    <div className="container bg-light text-muted">
      <h2 className="mb-4">Reports</h2>
      <div className="alert alert-info">Total Files: {report.total}</div>
      <div className="alert alert-success">Completed Files: {report.completed} </div>
      <div className="alert alert-warning">Pending Files: {report.pending} </div>
      <div className="alert alert-secondary">Processing Files: {report.processing} </div>
    </div>
  );
}

export default Reports;
