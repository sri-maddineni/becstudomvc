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
            <div className="d-flex justify-content-between">
                <div className="admin m-2">
                    <AdminMenu />
                </div>
                <div className="container">

                </div>
                <div className="pre m-2">
                    <>
                        {(auth?.user?.role == 0) && <h1>hello admin</h1>}
                    </>
                </div>
            </div>
            <div className="js">
                <pre className="m-2">
                    {JSON.stringify(auth?.user)}
                </pre>
            </div>

            <Footer />
        </>
    );
};

export default Profile;