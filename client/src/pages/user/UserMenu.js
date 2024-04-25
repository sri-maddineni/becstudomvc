import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <>
            <div className="list-group">
                <NavLink to="/dashboard/user/transactions" className="list-group-item list-group-item-action">Transactions History</NavLink>
                
            </div>


        </>
    )
}

export default UserMenu