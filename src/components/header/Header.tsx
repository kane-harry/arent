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
        <img src={iconLogo} />
        <Link
            to="/"
            className="d-flex align-items-center text-decoration-none header-link"
        >
          <img src={iconChallenge} />
          <span className="fs-4">チャレンジ</span>
        </Link>

        <Link
            to="/"
            className="d-flex align-items-center text-decoration-none header-link"
        >
          <img src={iconMyRecord} />
          <span className="fs-4">自分の記録</span>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <span className="cart py-2 text-decoration-none position-relative">
            <Link to="/cart" className="header-link">
              <img src={iconInfo} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCount}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </span>
        </nav>
        <span className="fs-4 header-link">自分の記録</span>

        <Link
            to="/"
            className="d-flex align-items-center text-decoration-none header-link"
        >
          <img src={iconMenu} />
        </Link>
      </div>
  )
}

export default Header
