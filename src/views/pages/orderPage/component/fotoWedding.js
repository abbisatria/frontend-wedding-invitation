import React from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Button, Row, Col } from 'reactstrap'

const FotoWedding = ({setPage}) => {
  const {push} = useHistory()
  const change = () => {
    setPage(4)
    push({pathname: "/order/payment"})
  }
  const back = () => {
    setPage(2)
    push({pathname: "/order/template"})
  }
  return (
    <>
      <div className="mt-4 text-center">
        <h2>Foto Album</h2>
        <p>Silahkan upload foto album wedding</p>
      </div>
      <Row>
        <Col md={12} className="d-flex justify-content-center mb-4">
          <div>
            <Input type="file" />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-3">
          <div className="foto-album">
            <div className="delete-foto">x</div>
            <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="photo wedding" />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-3">
          <div className="foto-album">
            <div className="delete-foto">x</div>
            <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="photo wedding" />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-3">
          <div className="foto-album">
            <div className="delete-foto">x</div>
            <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="photo wedding" />
          </div>
        </Col>
      </Row>
      <div className="mt-4 text-center">
        <h2>Video Album</h2>
        <p>Silahkan upload video album wedding</p>
      </div>
      <Row>
        <Col md={12} className="d-flex justify-content-center mb-4">
          <div>
            <Input type="file" />
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

export default FotoWedding
