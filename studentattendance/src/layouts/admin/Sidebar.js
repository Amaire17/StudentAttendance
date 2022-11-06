import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
            <Link className="nav-link" to="/#">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    x
                </Link>
                <Link className="nav-link" to="/admin/Dashboard">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </Link>

                <Link className="nav-link" to="/admin/Profile">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Profile
                </Link>
                
                <Link className="nav-link collapsed" to="/#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Classroom
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
                

                <Link className="nav-link collapsed" to="/#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                    Attendance
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
              
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
        </div>
    </nav>    
    );
}

export default Sidebar;