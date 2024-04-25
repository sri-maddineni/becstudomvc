import React, { useEffect, useState } from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'
import Nav from '../../components/UIComponents/Nav'
import axios from 'axios'
import toast from 'react-hot-toast'

const Users = () => {

    const [users,setusers]=useState([])

    const getusers=async()=>{
        try {
            const res=await axios.get(`${process.env.REACT_APP_API}/api/v1/users/getusers`)
            setusers(res.data.users)
            toast.success("done")
        } catch (error) {
            toast.success("not done")
            console.log(error)
        }
    }

    useEffect(()=>{
        getusers()
    },[])


    return (
        <>
            <Nav/>
            <div className="row m-3">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h3>users list</h3>
                    {users.map(user=>(
                        <div className="card" key={user._id} style={{width:"18rem"}}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Users