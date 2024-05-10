import React, { useState } from 'react'
import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'
import axios from "axios"
import toast from 'react-hot-toast'

const AddStudentPlacement = () => {

  const [name, setname] = useState("")
  const [regno, setregno] = useState("")
  const [count, setcount] = useState("")
  const [sal, setsal] = useState("")

  const handlesubmit=async()=>{
      try {
        const datar={name,regno,count,sal}
        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/add-student-placement`,datar)
        if(res.data.success){
          toast.success("submitted done!")
        }
        else{
          toast.error("failed to post")
        }
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
      <Nav />
      <div className="container" style={{ minHeight: "50vh", display: "flex", flexDirection: "row" }}>
        <div className="col-2 m-4">
          <AdminMenu />
        </div>
        <div className="col-9 m-4">
          <div className="form-group m-2">
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter student name" />
          </div>

          <div className="form-group m-2">
            <input type="text" value={regno.toLowerCase()} onChange={(e) => setregno((e.target.value).toLowerCase())} className="form-control" placeholder="regno" />
          </div>
          <div className="form-group m-2">
            <input type="text" value={count} onChange={(e) => setcount(e.target.value)} className="form-control" placeholder="count" />
          </div>
          <div className="form-group m-2">
            <input type="text" value={sal} onChange={(e) => setsal(e.target.value)} className="form-control" placeholder="sal" />
          </div>
          
          <div className="form-group m-2">
            <button className='btn btn-sm btn-primary' onClick={()=>handlesubmit()}>submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddStudentPlacement