import React, { useRef } from "react";
import { Form } from "@unform/web";
import Input from '../../Form/input';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from 'react-bootstrap/FormGroup';
import * as Yup from 'yup';

const initialData = {
}

export default function FormAdministration() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        iconName: Yup.string.required('O ícone é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

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

  return(
    <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit} className="form-horizontal">
      <Row>
        <Col md={6}>
          <div className="panel">
            <div className="panel-header">
              <h3>
                <div>
                  <i className="icon-book-open"></i><small>Menus</small>
                </div>
              </h3>
            </div>
            <div className="panel-content">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="name" placeholder="Nome do menu" />
                      <i className="icon-user"></i>
                    </Col>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="resource" placeholder="Url" />
                      <i className="icon-user"></i>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  )
}
