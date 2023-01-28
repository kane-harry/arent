import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import iconMenu from './icon_menu.svg'
import iconInfo from './icon_info.svg'
import iconMyRecord from './icon_my_record.svg'
import iconChallenge from './icon_challenge.svg'
import iconLogo from './logo.svg'

function Header() {
    const { totalCount } = useSelector((state:any) => state.cart)

    return (
        <div className="d-flex flex-column flex-md-row align-items-center mb-3 border-bottom header justify-content-between align-items-center">
            <img src={iconLogo}  alt=""/>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link
                    to="/"
                    className="d-flex align-items-center text-decoration-none header-link"
                >
                    <img src={iconChallenge} className="header-image"  alt=""/>
                    <span className="">チャレンジ</span>
                </Link>
                <Link
                    to="/"
                    className="d-flex align-items-center text-decoration-none header-link"
                >
                    <img src={iconMyRecord} className="header-image"  alt=""/>
                    <span className="">自分の記録</span>
                </Link>
                <span className="cart py-2 text-decoration-none position-relative">
                    <Link to="/cart" className="header-link">
                        <img src={iconInfo}  alt=""/>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalCount}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </Link>
                </span>
            </nav>
            <span className="header-link icon-info">自分の記録</span>

            <Link
                to="/"
                className="d-flex align-items-center text-decoration-none"
            >
                <img src={iconMenu}  alt=""/>
            </Link>
        </div>
    )
}

export default Header
