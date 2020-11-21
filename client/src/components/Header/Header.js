import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active"> 홈 </NavLink>
            <NavLink to="/map" className="item" activeClassName="active"> 지도 </NavLink>
            <NavLink to="/community" className="item" activeClassName="active"> 커뮤니티 </NavLink>
            <NavLink to="/mypage" className="item" activeClassName="active"> 마이페이지 </NavLink>
        </div>
    );
};

export default Header;