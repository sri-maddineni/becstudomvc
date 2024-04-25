import React, { useState } from 'react'
import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'
import axios from "axios";
import toast from 'react-hot-toast';

const AddTechie = () => {

    const [title, settitle] = useState("")
    const [name, setname] = useState("")
    const [imglink, setimglink] = useState("")
    const [des, setdes] = useState("")
    const [profile, setprofile] = useState("")
    const [email, setemail] = useState("")

    const handlesubmit = async () => {
        try {
            const data = { title, name, imglink, des, profile, email }
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/add-techie`, data)
            if (res.data.success) {
                console.log(res)
                toast.success("Done creating successfully!")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Nav />
            <div className="conatiner" style={{ minHeight: "50vh", display: "flex", flexDirection: "row" }}>
                <div className="col-3 m-4">
                    <AdminMenu />
                </div>
                <div className="col-8 m-5">
                    <div className="container">
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={email} onChange={(e) => { setemail(e.target.value) }} type="form-control" placeholder='enter email' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={title} onChange={(e) => { settitle(e.target.value) }} type="form-control" placeholder='enter Title' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={name} onChange={(e) => { setname(e.target.value) }} type="form-control" placeholder='enter techie name' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={imglink} onChange={(e) => { setimglink(e.target.value) }} type="form-control" placeholder='enter img link' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={des} onChange={(e) => { setdes(e.target.value) }} type="form-control" placeholder='enter description' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={profile} onChange={(e) => { setprofile(e.target.value) }} type="form-control" placeholder='enter profile link' />
                        </div>
                        <div className="text-center">
                            <button className='btn btn-primary' onClick={handlesubmit}>submit</button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddTechie