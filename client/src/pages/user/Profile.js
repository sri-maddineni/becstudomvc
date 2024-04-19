import React, { useContext } from "react";

import Footer from "../../components/layouts/Footer";

import AuthContext from "../../context/AuthContext";

import Nav from "../../components/UIComponents/Nav";
import AdminMenu from "../../components/layouts/AdminMenu";


const Profile = () => {
    const [auth] = useContext(AuthContext);


    return (
        <>

            <Nav />
            <div style={{ flex: "wrap", display: "flex", flexDirection: "row" }} className="m-3">
                <div className="admin m-2" style={{ width: "20%" }}>
                    <AdminMenu />
                </div>
                <div className="m-2" style={{ width: "60%" }}>

                </div>
                <div className="pre m-2" style={{ width: "20%" }}>
                    <>
                        {(auth?.user?.role == 0) && <h1>hello admin</h1>}
                    </>
                </div>
            </div>

            <p className="m-5">
                {JSON.stringify(auth?.user)}
            </p>


            <Footer />
        </>
    );
};

export default Profile;