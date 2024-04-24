import React  from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('token');

    const logout = () => {
        const userConfirmed = window.confirm("If you want to log out then click on OK button");
        if(userConfirmed){
            localStorage.removeItem('token');
            navigate('/sign');
        }
    };

    return (
        <>
            <div className='sidebar'>
                <ul>
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <NavLink to="/login" activeClassName="active">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sign" activeClassName="active">Sign</NavLink>
                            </li>
                            
                        </>
                    ) : (
                        <>
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

                            <div className="login-bottom">
                                <NavLink onClick={logout} activeClassName="active">Logout</NavLink>
                            </div>
                        </>
                    )}
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default Sidebar;
