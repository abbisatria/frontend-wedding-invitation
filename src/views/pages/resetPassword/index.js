import React from 'react'
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

const ResetPassword = () => {
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
            <h1>Reset Password</h1>
            <p>
              Masukkan password terbaru anda untuk mengubah password yang terdahulu
            </p>
            <CInputGroup className="mb-3 mt-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-lock-locked" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="password" placeholder="Masukkan Password Baru" autoComplete="current-password" />
            </CInputGroup>
            <CInputGroup className="mb-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-lock-locked" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="password" placeholder="Masukkan Konfirmasi Password" autoComplete="current-password" />
            </CInputGroup>
            <CButton color="primary" className="w-100">Reset Password</CButton>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ResetPassword
