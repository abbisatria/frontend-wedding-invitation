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

const ForgotPassword = () => {
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
            <h1>Lupa Password</h1>
            <p>
              Masukkan email yang terdaftar pada aplikasi wedding untuk melakukan lupa password
            </p>
            <CInputGroup className="mb-4 mt-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-envelope-open" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="text" placeholder="Masukkan Email" autoComplete="username" />
            </CInputGroup>
            <CButton color="primary" className="w-100">Lupa Password</CButton>
            <div className="text-center mt-4">
              Batal lupa password? Kembali
              <Link to="/login"> Login</Link>
            </div>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ForgotPassword
