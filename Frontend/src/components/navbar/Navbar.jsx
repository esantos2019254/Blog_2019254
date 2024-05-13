import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className="bg-yellow-200">
            <div className="navbar bg-base-100">
                <div className="flex-1 mx-10">
                    <Link className="btn btn-ghost text-xl font-bold">My Blog</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-10">
                        <li>
                            <Link to="/" className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts" className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold">Posts</Link>
                        </li>
                        <li>
                            <Link to="/create" className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold">Create</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
