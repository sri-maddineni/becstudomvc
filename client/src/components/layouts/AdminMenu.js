import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
            <div className="list-group">
                <NavLink to="/dashboard/admin/add-hostel" className="list-group-item list-group-item-action">Add Hostel</NavLink>
                <NavLink to="/dashboard/admin/add-paper" className="list-group-item list-group-item-action">Add paper</NavLink>
                <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
                <NavLink to="/dashboard/user/create-equipment-category" className="list-group-item list-group-item-action">Create Equipment Category</NavLink>
                <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
            </div>
        </>
    )
}

export default AdminMenu