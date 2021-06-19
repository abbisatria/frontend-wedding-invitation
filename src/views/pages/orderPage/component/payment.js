import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import Bca from '../../../../assets/img/logo_bca.png'

const Payment = ({setPage}) => {
  const {push} = useHistory()
  const back = () => {
    setPage(3)
    push({pathname: '/order/foto'})
  }
  return (
    <>
      <div className="mt-4 text-center">
        <h2>Pembayaran</h2>
        <p>Silahkan melakukan pembayaran wedding</p>
      </div>
      <Row>
        <Col md={1} sm={1} />
        <Col md={5} sm={5} className="mb-3">
          <h6>Transfer Pembayaran</h6>
          <h6>Total: <span>Rp.500.000</span></h6>
          <Row>
            <Col lg={2} md={3} sm={3} xs={3}>
              <img src={Bca} alt="bca" />
            </Col>
            <Col lg={10} md={9} sm={9} xs={9}>
              <h6>Bank Central Asia</h6>
              <h6>2208 1996</h6>
              <h6>Wedding Invitation</h6>
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={3} sm={3} xs={3}>
              <img src={Bca} alt="bca" />
            </Col>
            <Col lg={10} md={9} sm={9} xs={9}>
              <h6>Bank Central Asia</h6>
              <h6>2208 1996</h6>
              <h6>Wedding Invitation</h6>
            </Col>
          </Row>
        </Col>
        <Col md={2} sm={2} />
        <Col md={4} sm={4}>
          <FormGroup>
            <Label>Upload Bukti Pembayaran</Label>
            <Input type="file" />
          </FormGroup>
          <FormGroup>
            <Label>Asal Bank</Label>
            <Input type="text" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Nama Pengirim</Label>
            <Input type="text" placeholder="Please type here .." />
          </FormGroup>
        </Col>
        <Col md={12} className="d-flex justify-content-center mt-2">
          <Button color="primary" style={{width: 200}}>Submit</Button>
        </Col>
        <Col md={12} className="d-flex justify-content-center my-2">
          <Button color="secondary" onClick={back} style={{width: 200}}>Kembali</Button>
        </Col>
      </Row>
    </>
  )
}

export default Payment
