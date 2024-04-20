import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink to="/usestate" activeClassName="active">
                        useState
                        <select value={selectedOption} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="about">About</option>
                            <option value="example">Example</option>
                        </select>
                    </NavLink>
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
                    <NavLink to="/custom" activeClassName="active">customHook</NavLink>
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
                <li>
                    <NavLink activeClassName="active">Logout</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
