import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usestate" activeClassName="active">useState</NavLink>
                    </li>
                    <li>
                        <NavLink to="/useeffect" activeClassName="active">useEffect</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usecontext" activeClassName="active">useContext</NavLink>
                    </li>
                    <li>
                        <NavLink to="/useref" activeClassName="active">useRef</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usereducer" activeClassName="active">useReducer</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usecallback" activeClassName="active">useCallback</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usecustom" activeClassName="active">usecustom</NavLink>
                    </li>

                    <li>
                    <NavLink to="/usecount1" activeClassName="active">useCount1</NavLink>
                </li>
                    <li>
                        <NavLink to="/usememo" activeClassName="active">useMemo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign" activeClassName="active">Sign</NavLink>
                    </li>
                    <div className="login-bottom">
                        <NavLink activeClassName="active">Logout</NavLink>
                    </div>

                </ul>

            </div>
            <Outlet />
        </>
    );
}

export default Sidebar;
