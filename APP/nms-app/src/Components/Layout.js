import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Login from './VIews/Login'
import Button from './Button'

export default function Layout() {
    return (
        <div className='bg-dark'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        NeXus.
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                       <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about' >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/courses' >Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact' >Contact</Link>
                            </li>
                        </ul>
                        <Link className="nav-item" to='/login' ><Button /></Link>
                    </div>
                </div>
            </nav>

            <main className='bg-dark'>
            <Outlet />
            </main>
            
        </div>
    )
}
