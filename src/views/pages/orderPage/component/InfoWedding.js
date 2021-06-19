import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'

const InfoWedding = ({setPage}) => {
  const {push} = useHistory()
  const change = () => {
    setPage(2)
    push({pathname: "/order/template"})
  }
  return (
    <>
      <div className="mt-4 text-center">
        <h2>Informasi Wedding</h2>
        <p>Silahkan isi informasi wedding</p>
      </div>
      <Row>
        <Col md={6} className="px-5">
          <FormGroup>
            <Label>Mempelai Pria</Label>
            <Input type="text" name="mempelaiPria" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Mempelai Wanita</Label>
            <Input type="text" name="mempelaiWanita" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Ortu Mempelai Pria</Label>
            <Input type="text" name="ortuMempelaiPria" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Ortu Mempelai Wanita</Label>
            <Input type="text" name="ortuMempelaiWanita" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Photo Mempelai Pria</Label>
            <Input type="file" name="photoMempelaiWanita" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Photo Mempelai Wanita</Label>
            <Input type="file" name="photoMempelaiWanita" placeholder="Please type here .." />
          </FormGroup>
        </Col>
        <Col md={6} className="px-5">
          <FormGroup>
            <Label>Tanggal Akad Nikah</Label>
            <Input type="date" name="tanggalAkadNikah" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Jam Akad Nikah</Label>
            <Input type="time" name="jamAkadNikah" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Tempat Akad Nikah</Label>
            <Input type="text" name="tempatAkadNikah" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Tanggal Resepsi Nikah</Label>
            <Input type="date" name="tanggalResepsiNikah" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Jam Resepsi Nikah</Label>
            <Input type="time" name="jamResepsiNikah" placeholder="Please type here .." />
          </FormGroup>
          <FormGroup>
            <Label>Tempat Resepsi Nikah</Label>
            <Input type="text" name="tempatResepsiNikah" placeholder="Please type here .." />
          </FormGroup>
        </Col>
        <Col md={12} className="d-flex justify-content-center my-2">
          <Button color="primary" onClick={change} style={{width: 200}}>Selanjutnya</Button>
        </Col>
      </Row>
    </>
  )
}

export default InfoWedding
