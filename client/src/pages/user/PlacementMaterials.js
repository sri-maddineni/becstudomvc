import React, { useState, useEffect } from 'react';
import Nav from "../../components/UIComponents/Nav";
import Footer from '../../components/layouts/Footer';
import { Checkbox, Radio, Col, Row } from 'antd';
import SubjectsListPapers from '../../Data/SubjectsListPapers';
import axios from 'axios';
import toast from 'react-hot-toast';

const PlacementMaterials = () => {
    const [dept, setDept] = useState("");
    const [sub, setSub] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [papers, setPapers] = useState([]);

    const getPapers = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/subjects/get-placement-materials`);
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
            <div className="d-flex justify-content-around">
                <div className="filters m-2 p-2" >
                    <h4 className='m-3'>Tags</h4>
                    <Radio.Group onChange={(e) => setDept(e.target.value)} value={dept} className="d-flex" style={{ flexDirection: "column" }}>
                        <Radio value={"cse"} className="m-3">COMPUTERS</Radio>
                        <Radio value={"ece"} className="m-3">ECE</Radio>
                        <Radio value={"eee"} className="m-3">EEE</Radio>
                        <Radio value={"civil"} className="m-3">CIVIL</Radio>
                        <Radio value={"mech"} className="m-3">MECH</Radio>
                        <Radio value={"gen"} className="m-3">General</Radio>
                        <Radio value={"year1"} className="m-3">1st Year</Radio>
                    </Radio.Group>
                    <Checkbox.Group
                        style={{
                            width: '100%',
                        }}
                        
                    >
                        <Row>
                            <Col span={8}>
                                <Checkbox value="A">A</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B">B</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C">C</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D">D</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="E">E</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>


                </div>
                <div className="h3 m-2 p-2 text-center" style={{ border: "solid 1px darkcyan", maxHeight: "800px", }}>
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
                        {sub && <i className='fa-solid fa-multiply fa-1x mx-2' style={{ fontSize: "1rem" }} onClick={() => setSub("")}></i>}
                        <button className="btn btn-sm btn-outline-success m-2 my-sm-0" type="submit">Search</button>
                    </div>

                    {sub && <ul style={{ listStyle: "none", position: "relative", maxHeight: "200px", overflowY: "auto" }}>
                        {suggestions.map((suggest, index) => (
                            <li key={index} onClick={() => handleSelectSubject(suggest)} className='m-1 p-1' style={{ fontSize: "1rem", backgroundColor: "cyan", cursor: "pointer" }}>
                                {suggest.code} - {suggest.name}
                            </li>
                        ))}
                    </ul>}

                    <div className="card-container" style={{ maxHeight: "calc(100% - 100px)", overflowY: "auto" }}>
                        {papers.map((paper, index) => (
                            <div key={index} title={paper.sub} className="card m-3">
                                <p style={{ fontSize: "1.2rem" }}>{paper.code}-{paper.sub} : {paper.dept}</p>
                                <div className='d-flex justify-content-between'>
                                    <p style={{ fontSize: "0.8rem", fontWeight: "500" }}>{paper.des}</p>
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

export default PlacementMaterials;
