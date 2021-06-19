import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody
} from '@coreui/react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import Logo from '../../../assets/img/Logo.png'
import Banner from '../../../assets/img/img-bg.jpg'
import CIcon from '@coreui/icons-react'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="white" light expand="md">
        <Container>
          <NavbarBrand href="/">
              <img src={Logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Paket</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Fitur</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Testimoni</NavLink>
              </NavItem>
              <Link to="/" className="btn-login py-2 px-4">
                Login
              </Link>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <CContainer>
        <CRow className="align-items-center">
          <CCol md={5} className="order-2 order-lg-1">
            <h1>Manage Undangan Pernikahanmu</h1>
            <p className="py-2">
              Sebarkan undangan pernikahanmu dengan cepat dan
              praktis serta kelola tamu undanganmu
            </p>
            <CButton color="primary">
              Buat Undangan
            </CButton>
          </CCol>
          <CCol md={7} className="order-1 order-lg-1">
            <img src={Banner} alt="Banner" style={{width: '100%', height: 400}} />
          </CCol>
        </CRow>
        <div className="mt-5 text-center">
          <h2>Fitur Wedding</h2>
          <p>Nikmati beberapa fitur yang kami sediakan</p>
        </div>
        <CRow className="align-items-center">
          <CCol md={6} className="mb-2">
            <img src={Banner} alt="Banner" style={{width: '100%', height: 400}} />
          </CCol>
          <CCol md={6}>
            <div className="card-fitur">
              <CRow>
                <CCol md={1}>
                  <CIcon name="cil-lock-locked" />
                </CCol>
                <CCol md={11}>
                  <h6>Manage Undangan</h6>
                  <p>
                    Kamu dapat mengelola tamu undangan yang hadir
                  </p>
                </CCol>
              </CRow>
            </div>
            <div className="card-fitur my-3">
              <CRow>
                <CCol md={1}>
                  <CIcon name="cil-lock-locked" />
                </CCol>
                <CCol md={11}>
                  <h6>Desain Undangan</h6>
                  <p>
                    Kamu dapat memilih template undangan yang menarik
                  </p>
                </CCol>
              </CRow>
            </div>
            <div className="card-fitur">
              <CRow>
                <CCol md={1}>
                  <CIcon name="cil-lock-locked" />
                </CCol>
                <CCol md={11}>
                  <h6>AutoPlay Musik</h6>
                  <p>
                    Undanganmu akan lebih berwarna diiringi dengan musik
                  </p>
                </CCol>
              </CRow>
            </div>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer fluid className="paket-wedding mt-5">
        <div className="text-center">
          <h2>Paket Wedding</h2>
          <p>Paket terjangkau aman, cepet, praktis dan terpercaya</p>
        </div>
        <CContainer>
          <CRow>
            <CCol md={4}>
              <CCard className="text-light">
                <CCardBody>
                  <h6>Paket 1</h6>
                  <p>Rp. 200.000</p>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard className="text-light">
                <CCardBody>
                  <h6>Paket 1</h6>
                  <p>Rp. 200.000</p>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard className="text-light">
                <CCardBody>
                  <h6>Paket 1</h6>
                  <p>Rp. 200.000</p>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
      <CContainer>
        <div className="text-center mt-5">
          <h2>Testimoni Wedding</h2>
          <p>Komentar kepuasan pelangan setelah menggunakan wedding</p>
        </div>
        <CRow className="align-items-center">
          <CCol md={5}>
            <img src={Banner} alt="Banner" style={{width: '100%', height: 373}} />
          </CCol>
          <CCol md={7}>
            <h5>Pernikahan Jafar & Istri</h5>
            <h4 className="py-3">
              Wedding memberikan fitur yang sangat
              menarik, saya dapat mengelola ...
            </h4>
            <CButton color="primary">
              Detail Testimoni
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer fluid className="footer mt-5">
        <CContainer>
          <CRow>
            <CCol md={4}>
              <img src={Logo} alt="Logo" />
              <p>Manajemen undangan digital cepat dan praktis</p>
            </CCol>
            <CCol md={2}>
              <h5>Wedding</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    Paket
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Testimoni
                  </Link>
                </li>
              </ul>
            </CCol>
            <CCol md={3}>
              <h5>Sosial Media</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Instagram
                  </Link>
                </li>
              </ul>
            </CCol>
            <CCol md={3}>
              <h5>Sosial Media</h5>
              <ul className="list-unstyled">
                <li>
                    support@wedding.id
                </li>
                <li>
                    021-2208-1996
                </li>
                <li>
                  Wedding, Karawang, Jawa Barat
                </li>
              </ul>
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
    </>
  )
}

export default HomePage
