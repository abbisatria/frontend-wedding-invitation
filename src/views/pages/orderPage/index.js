import React, { useState } from 'react'
import { Container, Navbar, NavbarBrand, Row, Col } from 'reactstrap'
import Logo from '../../../assets/img/Logo.png'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import InfoWedding from './component/InfoWedding'
import Template from './component/template'
import FotoWedding from './component/fotoWedding'
import Payment from './component/payment'

const OrderPage = () => {
  const menu = [
    {
      page: 1,
      name: "Info Wedding"
    },
    {
      page: 2,
      name: "Template"
    },
    {
      page: 3,
      name: "Foto Album"
    },
    {
      page: 4,
      name: "Pembayaran"
    },
  ]
  const [page, setPage] = useState(1)
  return (
    <>
      <Navbar className="justify-content-center mb-3">
          <NavbarBrand href="/">
              <img src={Logo} alt="Logo" />
          </NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <ul className="progressbar">
              {menu.map(val => {
                return (
                  <React.Fragment key={String(val.page)}>
                    <li className={val.page === page ? "active" : ""}></li>
                  </React.Fragment>
                )
              })}
            </ul>
          </Col>
        </Row>
        <BrowserRouter>
          <Switch>
            <Route exact path="/order" name="Order Page 1">
              <InfoWedding setPage={setPage} />
            </Route>
            <Route path="/order/template" name="Order Page 2">
              <Template setPage={setPage} />
            </Route>
            <Route path="/order/foto" name="Order Page 3">
              <FotoWedding setPage={setPage} />
            </Route>
            <Route path="/order/payment" name="Order Page 3">
              <Payment setPage={setPage} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default OrderPage
