import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const Template = ({setPage}) => {
  const { push } = useHistory()
  const back = () => {
    setPage(1)
    push({pathname: "/order"})
  }
  const change = () => {
    setPage(3)
    push({pathname: "/order/foto"})
  }
  return (
    <>
      <div className="mt-4 text-center">
        <h2>Pilih Template</h2>
        <p>Silahkan pilih template wedding</p>
      </div>
      <Row>
        <Col lg={4} className="mb-2">
          <div className="template">
            <Button style={{backgroundColor: "white", color: "#3252DF", fontWeight: "500"}} className="template-hover">Template 1</Button>
          </div>
        </Col>
        <Col lg={4} className="mb-2">
          <div className="template">
            <Button style={{backgroundColor: "white", color: "#3252DF", fontWeight: "500"}} className="template-hover">Template 2</Button>
          </div>
        </Col>
        <Col lg={4} className="mb-2">
          <div className="template">
            <Button style={{backgroundColor: "white", color: "#3252DF", fontWeight: "500"}} className="template-hover">Template 3</Button>
          </div>
        </Col>
        <Col md={12} className="d-flex justify-content-center mt-2">
          <Button color="primary" onClick={change} style={{width: 200}}>Selanjutnya</Button>
        </Col>
        <Col md={12} className="d-flex justify-content-center my-2">
          <Button color="secondary" onClick={back} style={{width: 200}}>Kembali</Button>
        </Col>
      </Row>
    </>
  )
}

export default Template
