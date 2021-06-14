import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol md={7} className="d-none d-md-block authentication-image">
          <div className="d-flex justify-content-center align-items-center h-100">
            <h1>WEDDING</h1>
          </div>
        </CCol>
        <CCol md={5} className="authentication-form">
          <CForm>
            <h1>Login</h1>
            <p>
              Login dengan akun yang telah terdaftar pada aplikasi wedding
            </p>
            <CInputGroup className="mb-3 mt-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-envelope-open" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="text" placeholder="Masukkan Email" autoComplete="username" />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-lock-locked" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="password" placeholder="Masukkan Password" autoComplete="current-password" />
            </CInputGroup>
            <div className="text-right mb-4">
              <Link to="/forgot-password"> Lupa Password?</Link>
            </div>
            <CButton color="primary" className="w-100">Login</CButton>
            <div className="text-center mt-4">
              Belum punya akun? Ayo
              <Link to="/register"> Register</Link>
            </div>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Login
