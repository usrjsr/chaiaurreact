import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/auth.slice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={logoutHandler}
            className="px-5 py-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition duration-200"
        >
            Logout
        </button>
    )
}

export default LogoutBtn
