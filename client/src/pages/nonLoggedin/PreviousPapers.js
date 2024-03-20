import React, { useState, useEffect } from 'react';
import Nav from "../../components/UIComponents/Nav";
import Footer from '../../components/layouts/Footer';
import { Radio, } from 'antd'; // Import Card and Button components from antd
import SubjectsListPapers from '../../Data/SubjectsListPapers'; // Importing the subjects array
import axios from 'axios';
import toast from 'react-hot-toast';

const PreviousPapers = () => {
  const [dept, setDept] = useState("");
  const [sub, setSub] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [papers, setPapers] = useState([]);

  const getPapers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/subjects/get-papers`);
      if (res.data.success) {
        setPapers(res.data.papers);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to get papers");
    }
  };

  useEffect(() => {
    getPapers();
  }, []);

  // Function to filter suggestions based on the user's input
  const filterSuggestions = (input) => {
    const filtered = SubjectsListPapers.filter(subject =>
      subject.name.toLowerCase().includes(input.toLowerCase()) || subject.code.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5); // Limit the number of suggestions to 5
    setSuggestions(filtered);
  };

  const handleSelectSubject = (selectedSub) => {
    setSub(selectedSub.name);
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <>
      <Nav />
      <div className="d-flex justify-content-around">
        <div className="filters m-2 p-2" >
          <h4 className='m-3'>Departments</h4>
          <Radio.Group onChange={(e) => setDept(e.target.value)} value={dept} className="d-flex" style={{ flexDirection: "column" }}>
            <Radio value={"cse"} className="m-3">COMPUTERS</Radio>
            <Radio value={"ece"} className="m-3">ECE</Radio>
            <Radio value={"eee"} className="m-3">EEE</Radio>
            <Radio value={"civil"} className="m-3">CIVIL</Radio>
            <Radio value={"mech"} className="m-3">MECH</Radio>
          </Radio.Group>
        </div>
        <div className="h3 m-2 p-2 text-center" style={{ border: "solid 1px darkcyan", maxHeight: "8000px" }}>
          <h2>Papers</h2>
          <div className="form-inline m-2 m-lg-0 d-flex justify-content-center">
            <input
              className="form-control m-2 mr-sm-2"
              type="search"
              placeholder="Enter sub name"
              aria-label="Search"
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
                filterSuggestions(e.target.value);
              }}
            />
            <button className="btn btn-sm btn-outline-success m-2 my-sm-0" type="submit">Search</button>
          </div>

          {sub && <ul style={{ listStyle: "none", position:"relative", }}>
            {suggestions.map((suggest, index) => (
              <li key={index} onClick={() => handleSelectSubject(suggest)} className='m-1 p-1' style={{ fontSize: "1rem", backgroundColor: "cyan", cursor: "pointer" }}>
                {suggest.code} - {suggest.name}
              </li>
            ))}
          </ul>}

          {/* Display papers in Bootstrap cards */}
          <div className="card-container" style={{ maxHeight: "calc(100% - 100px)", overflowY: "auto" }}>
            {papers.map((paper, index) => (
              <div key={index} title={paper.sub} className="card m-3">
                <p style={{ fontSize: "1.2rem" }}>{paper.code}-{paper.sub} : {paper.dept}</p>
                <div className='d-flex justify-content-around'>
                  <p style={{ fontSize: "0.8rem" }}>{paper.description}</p>
                  <a href={paper.link} className='btn btn-sm btn-primary' target="_blank" rel="noopener noreferrer">Open Folder</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="filters m-2 p-2"></div>
      </div>
      <Footer />
    </>
  );
};

export default PreviousPapers;
