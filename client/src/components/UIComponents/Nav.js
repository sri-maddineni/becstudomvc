import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function Nav() {

    const [auth, setAuth] = useContext(AuthContext)

    const navigate = useNavigate();


    const handleLogout = () => {
        setAuth({
            user: null,
            token: "",
        });

        localStorage.removeItem("auth");
        toast.success("Logged out successfully");
        navigate("/login")
    };
    return (
        <>
            <header className="bg-dark text-white text-center py-3">
                <h1 className="mt-3">BEC Studo</h1>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-sm" style={{ '--bs-bg-opacity': '0.8', 'height': '60px' }} >
                <div className="container-fluid ">
                    <Link className="navbar-brand text-warning" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navi" aria-controls="navi" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navi">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active p-3" aria-current="page" to="/hostels">Hostels</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white p-3 disabled" href='#' id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Rooms
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/dashboard/user/sell-commodity" >Rooms</Link></li>
                                    <li><Link className="dropdown-item" to="/cp" >Flats</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white p-3 disabled" href='#' id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Food
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/cp" >Mess</Link></li>
                                    <li><Link className="dropdown-item" to="/cp" >Curry Points</Link></li>
                                    <li><Link className="dropdown-item" to="/cp" >Food courts</Link></li>
                                    <li><Link className="dropdown-item" to="/cp" >Biryani points</Link></li>
                                    <li><Link className="dropdown-item" to="/user/hire-equipment" >Restaurants</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white p-3 disabled" href='#' id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Academics
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={auth?.user ? "/dashboard/user/post-potential" : "/login"} >Attendence</Link></li>
                                    <li><Link className="dropdown-item" to={auth?.user ? "/dashboard/user/post-potential" : "/login"} >Notices</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard/user/post-equipment" >Internals Calc</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard/user/post-equipment" >Techies</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard/user/post-equipment" >Materials</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard/user/post-equipment" >Important links</Link></li>
                                </ul>

                            </li>

                            <li className='nav-item dropdown'>
                                <a href="" className="nav-link text-white p-3 disabled">
                                    Placements
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/placement-materials">Placement Materials </Link></li>
                                    <li>
                                        <a class="dropdown-item disabled" href="#">Placement offers</a>

                                        <ul class="submenu">
                                            <li><a class="dropdown-item" href="../placements/y20placements.html">Y20 Placements</a></li>
                                        </ul>
                                    </li>


                                </ul>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link active p-3" aria-current="page" to="/previous-papers">Previous papers</Link>
                            </li>

                            { /*<li className="nav-item">
                                <Link className="nav-link active p-3" aria-current="page" to="/rooms">Cold Storages</Link>
                            </li>*/}



                        </ul>



                        {!auth?.user ? (
                            <>
                                <button className="btn btn-sm btn-success m-3" type="button" onClick={() => { navigate("/login") }}>Login</button>
                                <button className="btn btn-sm btn-success m-3" type="button" onClick={() => { navigate("/register") }}>Register</button>
                            </>
                        ) : (
                            <>
                                <ul className="navbar-nav p-2 mx-5">
                                   

                                    
                                    
                                    
                                    

                                    <li className="nav-item dropdown active m-2">
                                        <a className="nav-link me-auto disabled text-warning" style={{color:"yellow"}} href='#' data-bs-toggle="dropdown">{auth?.user?.name}   <i className="fa-solid fa-sort-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to={`/user/${auth?.user?.regno}/profile`}>Profile</Link></li>
                                            <li><a className="dropdown-item" onClick={handleLogout}> Logout </a></li>
                                        </ul>
                                    </li>
                                    

                                </ul>
                            </>
                        )}





                    </div>
                </div>
            </nav>
        </>
    )
}


