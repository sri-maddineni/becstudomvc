import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
            <div className="list-group">
                <NavLink to="/dashboard/admin/add-hostel" className="list-group-item list-group-item-action">Add Hostel</NavLink>
                <NavLink to="/dashboard/admin/add-admin-member" className="list-group-item list-group-item-action">Add BEC Studo member</NavLink>
                <NavLink to="/dashboard/admin/add-paper" className="list-group-item list-group-item-action">Add subject (QP)</NavLink>
                <NavLink to="/dashboard/admin/add-placement-material" className="list-group-item list-group-item-action">Add Placement Material</NavLink>
                <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
            </div>
        </>
    )
}

export default AdminMenu