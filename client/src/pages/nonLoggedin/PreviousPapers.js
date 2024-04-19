import React, { useState, useEffect } from 'react';
import Nav from "../../components/UIComponents/Nav";
import Footer from '../../components/layouts/Footer';
import { Checkbox, Radio, Col, Row } from 'antd';
import SubjectsListPapers from '../../Data/SubjectsListPapers';
import axios from 'axios';
import Spinner from '../../components/UIComponents/Spinner';
import toast from 'react-hot-toast';

const PreviousPapers = () => {
  const [dept, setDept] = useState("");
  const [sub, setSub] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false)

  const getPapers = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/subjects/get-papers`);
      if (res.data.success) {
        setPapers(res.data.papers);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to get papers");
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getPapers();
  }, []);

  const filterSuggestions = (input) => {
    const filtered = SubjectsListPapers.filter(subject =>
      subject.name.toLowerCase().includes(input.toLowerCase()) || subject.code.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5);
    setSuggestions(filtered);
  };

  const handleSelectSubject = (selectedSub) => {
    setSub(selectedSub.name);
    setSuggestions([]);
  };

  return (
    <>
      <Nav />
      <div className='m-3' style={{border:"solid 1px black", display:"flex",flexDirection:"row",justifyContent:"space-evenly" }}>
        <div className="filters m-2 p-2" >
          <h4 className='m-3'>Departments</h4>
          <Radio.Group onChange={(e) => setDept(e.target.value)} value={dept} className="d-flex" style={{ flexDirection: "column"}}>
            <Radio value={"it"} className="m-3">COMPUTERS</Radio>
            <Radio value={"ece"} className="m-3">ECE</Radio>
            <Radio value={"eee"} className="m-3">EEE</Radio>
            <Radio value={"eie"} className="m-3">EIE</Radio>
            <Radio value={"civil"} className="m-3">CIVIL</Radio>
            <Radio value={"mech"} className="m-3">MECH</Radio>
            <Radio value={"mat"} className="m-3">Mat</Radio>
            <Radio value={"phy"} className="m-3">Phy</Radio>
            <Radio value={"che"} className="m-3">Che</Radio>
            <Radio value={"eng"} className="m-3">Eng</Radio>
            <Radio value={"others"} className="m-3">Others</Radio>
          </Radio.Group>


        </div>
        <div className="h3 m-2 p-2 text-center" style={{ maxHeight: "800px", margin: '2px' }}>
          <h2>Question Papers</h2>
          <div className="form-inline m-2 m-lg-0 d-flex justify-content-center">
            <input
              className="form-control"
              type="search"
              placeholder={`Search among ${papers.length} available subjects`}
              aria-label="Search"
              value={sub}
              style={{minWidth:"700px"}}
              onChange={(e) => {
                setSub(e.target.value);
                filterSuggestions(e.target.value);
              }}
            />
            {sub && <i className='fa-solid fa-multiply fa-1x mx-2' style={{ fontSize: "1rem" }} onClick={() => setSub("")}></i>}
            <button className="btn btn-sm btn-outline-success m-2 my-sm-0" type="submit">Search</button>
            
          </div>

          

          <div className="card-container" style={{ maxHeight: "calc(100% - 100px)", overflowY: "auto" }}>
            {
              loading && <Spinner />
            }
            {papers.map((paper, index) => (
              <div key={index} title={paper.sub} className="card m-3">
                <p style={{ fontSize: "1.2rem", display:'flex',flexDirection:"row",justifyContent:"space-around" }}>{paper.code}-{paper.sub} : {paper.dept}</p>
                <div className='d-flex justify-content-between'>
                  <p style={{ fontSize: "0.8rem", fontWeight: "500" }}>{paper.des}</p>
                  <a href={paper.link} className='btn btn-sm btn-primary text-white' target="_blank" rel="noopener noreferrer">Open Folder</a>
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
