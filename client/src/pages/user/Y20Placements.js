import React, { useEffect, useState } from 'react'

import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import axios from 'axios'
import toast from 'react-hot-toast'

const Y20Placements = () => {

  const [companies, setcompanies] = useState([])


  const getCompanies = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/pages/get-companies`)
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


  useEffect(() => {
    getCompanies();
  }, [])


  return (
    <>
      <Nav />
      <div className="container" style={{ minHeight: "50vh" }}>
        <div className="container" style={{ border: "solid 1px black", minHeight: "40vh", margin: "20px" }}>
          <div className="m-3" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <div className='btn btn-warning' style={{ width: "45%" }}>Companies</div>
            <div className='btn btn-warning' style={{ width: "45%" }}>Students</div>
          </div>
          <div className="container" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>{companies.map(company => (
            <>
              <div className="card" style={{width:"16rem"}}>
                
                <img src={company.imglink} alt="company pic" style={{objectFit:"fill",width:"13rem",height:"10rem"}}/>
                <h5>{company.company}</h5>
                <p style={{margin:"0"}}>{company.no} jobs offered</p>
                <p style={{margin:"1px"}}>&#8593; : {company.high} LPA &nbsp;  <span className='fw fw-bolder'> &#8595;</span> : {company.low} LPA</p>
                <p className='text-muted text-bolder'>{company.des}</p>
                <a href={company.link} target='_blank' className='btn btn-sm btn-primary'>visit company</a>
              </div>
            </>
          ))}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Y20Placements