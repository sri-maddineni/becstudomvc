import React, { useState } from 'react'
import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'
import axios from "axios";
import toast from 'react-hot-toast';

const AddCompany = () => {


    const [company, setcompany] = useState("")
    const [no, setno] = useState("") //number of students hired offers given
    const [imglink, setimglink] = useState("")
    const [high, sethigh] = useState("")
    const [low, setlow] = useState("")
    const [avg, setavg] = useState('')
    const [des, setdes] = useState("")
    const [link, setlink] = useState("")
    //name no of offers highest,lowest,avg, previously times

    const handlesubmit = async () => {
        try {
            const datar = { company, no, imglink, high, low, avg, des, link }
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/add-company`, datar)
            if (res.data.success) {
                console.log(res)
                toast.success("Done creating successfully!")

                setcompany("")
                setimglink("")
                sethigh("")
                setlow("")
                setavg("")
                setdes("")
                setlink("")
                setno("")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Nav />
            <div className="conatiner" style={{ minHeight: "50vh", display: "flex", flexDirection: "row" }}>
                <div className="col-2 m-4">
                    <AdminMenu />
                </div>
                <div className="col-8 m-5">
                    <div className="container">
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={company} onChange={(e) => { setcompany(e.target.value) }} type="form-control" placeholder='enter company name' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={no} onChange={(e) => { setno(e.target.value) }} type="form-control" placeholder='enter no of offers given' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={high} onChange={(e) => { sethigh(e.target.value) }} type="form-control" placeholder='enter highest package given' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={low} onChange={(e) => { setlow(e.target.value) }} type="form-control" placeholder='enter lowest package given' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={avg} onChange={(e) => { setavg(e.target.value) }} type="form-control" placeholder='enter avgest package given' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={imglink} onChange={(e) => { setimglink(e.target.value) }} type="form-control" placeholder='enter img link' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={des} onChange={(e) => { setdes(e.target.value) }} type="form-control" placeholder='enter description' />
                        </div>
                        <div className='m-2'>
                            <input style={{ width: "500px", height: "35px" }} value={link} onChange={(e) => { setlink(e.target.value) }} type="form-control" placeholder='enter link' />
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

export default AddCompany