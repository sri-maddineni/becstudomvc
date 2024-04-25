import React, { useContext, useState } from "react";

import Footer from "../../components/layouts/Footer";

import AuthContext from "../../context/AuthContext";

import Nav from "../../components/UIComponents/Nav";
import AdminMenu from "../../components/layouts/AdminMenu";
import toast from "react-hot-toast";
import UserMenu from "./UserMenu";


const Profile = () => {
    const [auth] = useContext(AuthContext);
    const [isadmin, setisadmin] = useState(auth?.user?.role)

    toast.success(Boolean(!auth?.user?.role))

    


    return (
        <>

            <Nav />
            <div style={{ flex: "wrap", display: "flex", flexDirection: "row" }} className="m-3">
                <div className="container" style={{display:"flex",flexDirection:"row"}}>
                    <div className="col-3">
                        {isadmin && <AdminMenu />}
                    </div>
                    <div className="col-9" style={{minHeight:"30vh"}}>
                        
                        <pre>
                        {JSON.stringify(auth?.user,4)}
                        </pre>
                    </div>
                </div>
            </div>

            


            <Footer />
        </>
    );
};

export default Profile;