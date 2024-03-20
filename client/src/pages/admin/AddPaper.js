import React, {  useState } from 'react'
import Nav from '../../components/UIComponents/Nav'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'
import { Radio } from 'antd'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddPaper = () => {

    const [dept,setDept]=useState("")
    const [sub,setsub]=useState("")
    const [code,setcode]=useState("")
    const [link,setlink]=useState("")

   const navigate=useNavigate()
    

    const handlesubmit=async(e)=>{
        e.preventDefault()
        const data={sub,code,link,dept}
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/subjects/add-qpapersub`,data)
            console.log(res)

            if(res?.data?.success){
                toast.success("success")
                navigate("/dashboard/admin/add-paper")
                setDept("")
                setlink("")
                setcode("")
                setsub("")
            }
            
            
            
        } catch (error) {
            console.log("failed to post",error)
            toast.error("failed to post")
        }
    }
    return (
        <>
            <Nav />

            <div className="container" style={{ display: "flex", flexDirection: "row" }}>
                <div className="adminmenu m-2" style={{ width: "25%" }}>
                    <AdminMenu />
                </div>
                <div style={{ width: "65%" }} className='m-2'>
                    <h5 className='m-2 text-center'>Add paper</h5>
                    <form>
                        <div className="form-group">
                            <input type="text" value={sub} onChange={(e)=>setsub(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter subject name" />
                        </div>
                        
                        <div className="form-group">
                            <input type="text" value={code} onChange={(e)=>setcode(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="code" />
                        </div>
                        <div className="form-group">
                            <input type="text" value={link} onChange={(e)=>setlink(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="link" />
                        </div>
                        <div className="filters m-2 p-2">
                            
                            <Radio.Group onChange={(e) => setDept(e.target.value)} value={dept} className="d-flex" style={{ flexDirection: "row" }}>
                                <Radio value={"computers"} className="m-3">COMPUTERS</Radio>
                                <Radio value={"ece"} className="m-3">ECE</Radio>
                                <Radio value={"eee"} className="m-3">EEE</Radio>
                                <Radio value={"civil"} className="m-3">CIVIL</Radio>
                                <Radio value={"mech"} className="m-3">MECH</Radio>
                                <Radio value={"gen"} className="m-3">General</Radio>
                            </Radio.Group>
                        </div>

                        <button type="submit" onClick={handlesubmit} className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default AddPaper