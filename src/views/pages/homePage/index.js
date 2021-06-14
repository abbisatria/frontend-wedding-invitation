import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CContainer,
  CForm,
  CNavbar,
  CNavLink,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavItem,
} from '@coreui/react'
import Logo from '../../../assets/img/Logo.png'

const HomePage = () => {
  return (
    <CNavbar expandable="md">
      <CContainer>
        <CNavbarBrand>
          <Link to="">
            <img src={Logo} alt="Logo" />
          </Link>
        </CNavbarBrand>
        <CCollapse className="navbar-collapse justify-content-end">
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#">
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                Paket
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                Fitur
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                Testimoni
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CButton type="submit" color="primary">
              Login
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default HomePage
