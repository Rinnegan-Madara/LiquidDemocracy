import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <NavLink to='/' activeClassName='is-active' 
            exact={true}>Dashboard</NavLink>
        <NavLink to='/AddMember' activeClassName='is-active' 
            exact={true}>Add Member</NavLink>
        <NavLink to='/MembersList' activeClassName='is-active' 
            exact={true}>View Members</NavLink>
        <NavLink to='/AddProposal' activeClassName='is-active' 
            exact={true}>Add a Proposal</NavLink>            
    </header>
);

export default Header;