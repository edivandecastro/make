import React, { useRef } from 'react';
import InputMask from '../Form/inputMask';
import { Form } from '@unform/web';
import Input from '../Form/input';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import { Scope } from '@unform/core';
import * as Yup from 'yup';
import './style.css';
import * as moment from 'moment';
import 'moment/locale/pt-br';

const initialData = {
  // name: "Jon Snow",
  // dateOfBirth: "03/04/1986",
  // father: "Rhaegar Targaryen",
  // monther: "Lyanna Stark",
  // email: "jonsnow@gmail.com",
  // address: {
  //   street: "Avenida dos caminhantes brancos",
  //   streetNumber: "1323",
  //   cep: "60331200",
  //   complement: "Alto",
  //   state: "Norte",
  //   city: "Winterfell",
  //   neighborhood: "Guardiões do Norte"
  // }
}

const FormCollaborator = () => {

  async function handleSubmit(data, { reset })  {
    try {
      const schema = Yup.object().shape({
         name: Yup.string().required("Nome completo é obrigatório"),
         dateOfBirth: Yup.date().transform((value, originalValue) => {
          const correctDate = moment(originalValue, 'DD/MM/YYYY');
          return correctDate.isValid() ? correctDate.toDate() : new Date('');
         }).typeError('Data de Nascimento inválida'),
         father: Yup.string().required("Nome do pai é obrigatório"),
         monther: Yup.string().required("Nome da mãe é obrigatório"),
         email: Yup.string().email("Informe um email válido").required("Email é obrigatório"),
         address: Yup.object().shape({
          street: Yup.string().required("Logradouro é obrigatório"),
          streetNumber: Yup.string().required("Número é obrigatório"),
          cep: Yup.string().required("Cep é obrigatório"),
          state: Yup.string().required("Estado é obrigatório"),
          city: Yup.string().required("Cidade é obrigatório"),
          neighborhood: Yup.string().required("Bairro é obrigatório"),
         })
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  const formRef = useRef(null);

  return(
    <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit} className="form-horizontal">
      <Row>
        <Col md={6}>
          <div className="panel">
            <div className="panel-header">
              <h3>
                <div>
                  <i className="icon-book-open"></i><small>Dados Pessoais</small>
                </div>
              </h3>
            </div>
            <div className="panel-content">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="name" placeholder="Nome Completo" />
                      <i className="icon-user"></i>
                    </Col>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <InputMask mask="99/99/9999" className="form-control" name="dateOfBirth"
                        placeholder="Data de Nascimento" maskPlaceholder="" />
                      <i className="icon-calendar"></i>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="father" placeholder="Nome do Pai" />
                      <i className="icon-people"></i>
                    </Col>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="monther" placeholder="Nome da Mãe"  />
                      <i className="icon-user-female"></i>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="email" placeholder="Email"  />
                      <i className="icon-envelope"></i>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <div className="col-button">
                  <Button type="submit" variant="default" className="btn-square">Salvar</Button>
                </div>
              </Row>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="panel">
            <div className="panel-header">
              <h3>
                <div>
                  <i className="icon-direction"></i><small>Endereço</small>
                </div>
              </h3>
            </div>
            <div className="panel-content">
              <Scope path="address">
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="street" placeholder="Logradouro"  />
                        <i className="icon-home"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="streetNumber" placeholder="Número"  />
                        <i className="icon-location-pin"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="cep" placeholder="Cep"  />
                        <i className="icon-directions"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="complement" placeholder="Complemento"  />
                        <i className="icon-options"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="state" placeholder="Estado"  />
                        <i className="icon-map"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="city" placeholder="Cidade"  />
                        <i className="icon-compass"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} >
                    <FormGroup>
                      <Col className="prepend-icon">
                        <Input type="text" className="form-control" name="neighborhood" placeholder="Bairro"  />
                        <i className="icon-layers"></i>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </Scope>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default FormCollaborator
