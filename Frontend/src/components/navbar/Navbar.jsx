import React from 'react';

export const Navbar = () => {
    return (
        <div className="bg-yellow-200">
            <div className="navbar bg-base-100">
                <div className="flex-1 mx-10"> {/* Agregamos margen horizontal al elemento flex-1 */}
                    <a className="btn btn-ghost text-xl font-bold">My Blog</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-10">
                        <li>
                            <a className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold">Home</a>
                        </li>
                        <li>
                            <a className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold">Posts</a>
                        </li>
                        <li> {/* Agregamos margen horizontal al elemento li */}
                            <a className="btn btn-ghost text-lg hover:bg-yellow-300 hover:text-white font-bold">Create</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
