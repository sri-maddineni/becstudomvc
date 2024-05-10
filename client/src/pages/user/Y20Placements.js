import React, { useEffect, useState } from 'react'
import { Flex, Radio } from 'antd';
import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import axios from 'axios'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

const Y20Placements = () => {

  const [companies, setcompanies] = useState([])
  const [display, setDisplay] = useState("Companies")
  const [students, setStudents] = useState([])

  const getCompanies = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/pages/placements/get-companies`)
      if (res.data.success) {
        setcompanies(res.data.result)
        toast.success("Companies list obtained successfully!")
      }
      else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const GetStudents = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/pages/placements/get-students`)
      if (res.data.success) {
        setStudents(res.data.result)
        toast.success("students list obtained successfully!")
      }
      else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getCompanies();
  }, [])



  const Breadcrumb = () => {
    return (
      <nav aria-label="breadcrumb" style={{ margin: "0", padding: "0" }}>
        <ol className="breadcrumb m-2">
          {/* <li className="mr-2" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
            <abbr title="Go back">
              <IoArrowBackCircle style={{ fontSize: '1.8rem' }} />
            </abbr>
          </li> */}
          <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item"><NavLink to="">Y20 placements</NavLink></li>

          <li className="breadcrumb-item active" aria-current="page">{display}</li>
        </ol>
      </nav>
    );
  };


  const CompaniesList = () => {
    return (
      <div className='card' style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", }}>
        {companies.map(company => (
          <>
            <div className="card" style={{ width: "16rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <img src={company.imglink} alt="company pic" style={{ objectFit: "fill", width: "14.5rem", height: "10rem" }} />
                <h5>{company.company}</h5>
                <p style={{ margin: "0" }}>{company.no} jobs offered</p>
                <p style={{ margin: "1px" }}>&#8593; : {company.high} LPA &nbsp; <span className='fw fw-bolder'> &#8595;</span> : {company.low} LPA</p>
                <p className='text-muted text-bolder'>{company.des}</p>
              </div>
              <div style={{ marginTop: "auto" }}>
                <a href={company.link} style={{ width: "100%" }} target='_blank' rel='noreferrer' className='btn btn-sm btn-primary'>visit company</a>
              </div>
            </div>
          </>
        ))}
      </div>
    )
  }

  const StudentsList = () => {
    return (
      <div className="card" style={{ minHeight: "10vh", display: "flex", flexDirection: "row" }}>
        {
          students.map(student => (
            <div className="card" style={{ width: "18rem", }}>
              <p className='card-header bg-primary text-white'>{student.regno}</p>
              <div className="card-body">
                
                <p>{student.name}</p>
                <p>Offers : {student.count} - {student.sal} LPA package</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }


  return (
    <>
      <Nav />
      <Breadcrumb />
      <hr />
      <div className="container" style={{ minHeight: "50vh" }}>
        <div className="container" style={{ minHeight: "40vh", margin: "20px" }}>

          <div className="container text-center">
            <Flex vertical gap="middle">
              <Radio.Group defaultValue="a" size="large">
                <Radio.Button className='mx-3 mb-3' style={{ fontSize: "2rem", fontWeight: "750", color: display === "Companies" ? "blue" : "inherit" }} value="Companies" onClick={() => setDisplay("Companies")}>Companies</Radio.Button>
                <Radio.Button className='mx-3 mb-3' style={{ fontSize: "2rem", fontWeight: "750" }} value="Students" onClick={() => {
                  GetStudents()
                  setDisplay("Students")

                }}>Students</Radio.Button>
              </Radio.Group>
            </Flex>
          </div>
          <div className="container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
            {display === "Companies" ? <CompaniesList /> : <StudentsList />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Y20Placements