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

const Register = () => {
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
            <h1>Register</h1>
            <p>
              Daftarkan diri anda untuk menikmati fitur yang disediakan oleh aplikasi wedding
            </p>
            <CInputGroup className="mb-3 mt-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-envelope-open" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="text" placeholder="Masukkan Email" autoComplete="username" />
            </CInputGroup>
            <CInputGroup className="mb-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-lock-locked" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="password" placeholder="Masukkan Password" autoComplete="current-password" />
            </CInputGroup>
            <CButton color="primary" className="w-100">Register</CButton>
            <div className="text-center mt-4">
              Sudah punya akun? Kembali
              <Link to="/login"> Login</Link>
            </div>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Register
