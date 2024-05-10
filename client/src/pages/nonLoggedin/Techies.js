import React, { useEffect, useState } from 'react'
import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import axios from 'axios'
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'



const Techies = () => {

  const navigate = useNavigate();

  const [techies, setTechies] = useState([])

  const getTechies = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/pages/get-techies`)
      if (res.data.success) {
        console.log(res)

        setTechies(res.data.result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTechies();
  }, [])


  const Breadcrumb = () => {
    return (
      <nav aria-label="breadcrumb" style={{margin:"0",padding:"0"}}>
        <ol className="breadcrumb m-2">
          {/* <li className="mr-2" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
            <abbr title="Go back">
              <IoArrowBackCircle style={{ fontSize: '1.8rem' }} />
            </abbr>
          </li> */}
          <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>

          <li className="breadcrumb-item active" aria-current="page">Techies</li>
        </ol>
      </nav>
    );
  };


  return (
    <>
      <Nav />
      <Breadcrumb />
      <hr />
      <div className="container" style={{ minHeight: "50vh" }}>
        <div className="container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
          {
            techies.map(techie => (
              <div className="card" style={{ "width": "17rem" }}>

                <img className="card-img-top mx-1" src={techie.imglink} style={{ width: "8rem", height: "8rem", objectFit: "cover" }} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{techie.title}</h5>
                  <p className="card-text">{techie.des}</p>

                </div>
                <div className="row">
                  <p className='fw fw-bolder'>{techie.name}</p>
                </div>
                <a href={techie.profile} target='_blank' className="btn btn-primary btn-sm">view profile</a>

              </div>
            ))
          }
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Techies