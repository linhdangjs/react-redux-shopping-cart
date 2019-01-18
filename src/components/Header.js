import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand">SKY TECH</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link">Laptop</a>
                            <a className="nav-item nav-link">Ipad</a>
                            <a className="nav-item nav-link ">Smart Phone</a>
                        </div>
                    </div>
                    <ul className="nav navbar-nav nav-flex-icons ml-sm-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-user"></i> Tài Khoản</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                                <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                                <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                            </div>
                        </li>
                    </ul>
                </nav>


            </header>
        );
    }
}

export default Header;
