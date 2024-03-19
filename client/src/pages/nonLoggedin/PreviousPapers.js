import React, { useState } from 'react'
import Nav from "../../components/UIComponents/Nav";
import Footer from '../../components/layouts/Footer';
import { Radio } from 'antd';

const PreviousPapers = () => {

  const [dept, setDept] = useState("")
  const [sub, setSub] = useState("")

  return (

    <>
      <Nav />
      <div className="d-flex justify-content-around">
        <div className="filters m-2 p-2" style={{border:"solid 1px cyan"}}>
          <h4 className='m-3'>Departments</h4>
          <Radio.Group onChange={(e) => setDept(e.target.value)} value={dept} className="d-flex" style={{ flexDirection: "column" }}>
            <Radio value={"cse"} className="m-3">COMPUTERS</Radio>
            <Radio value={"ece"} className="m-3">ECE</Radio>
            <Radio value={"eee"} className="m-3">EEE</Radio>
            <Radio value={"civil"} className="m-3">CIVIL</Radio>
            <Radio value={"mech"} className="m-3">MECH</Radio>
          </Radio.Group>
        </div>
        <div className="h3 m-2 p-2" style={{border:"solid 1px cyan"}}>
          Papers
        </div>
        <div className="filters m-2 p-2" style={{border:"solid 1px cyan"}}>
          <h4 className='m-3'>Subjects</h4>
          <Radio.Group onChange={(e) => setSub(e.target.value)} value={sub} className="d-flex" style={{ flexDirection: "column" }}>
            <Radio value={"ai"} className="m-3">AI</Radio>
            <Radio value={"ece"} className="m-3">ECE</Radio>
            <Radio value={"eee"} className="m-3">EEE</Radio>
            <Radio value={"civil"} className="m-3">CIVIL</Radio>
            <Radio value={"mech"} className="m-3">MECH</Radio>
          </Radio.Group>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default PreviousPapers