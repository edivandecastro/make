import React, { useRef, useState } from "react";
import { Form } from "@unform/web";
import Select from 'react-select';
import Input from '../../Form/input';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from 'react-bootstrap/FormGroup';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const initialOptions = menus => {
  let options = [];

  menus.forEach(menu => {
    options.push({ value: menu.code, label: menu.name });

    if(menu.submenus.length > 0) {
      options = options.concat(initialOptions(menu.submenus))
    }
  });

  return options;
}

const initialData = {
}

export default function FormAdministration() {
  const formRef = useRef(null);
  const { menus } = useSelector(state => state.menus);
  const [selectedOption, setSelectedOption] = useState(null);

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
      <Col md={6}>
        <Row>
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
                    <Select
                      isClearable={true}
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={initialOptions(menus)} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="name" placeholder="Nome do menu" />
                      <i className="icon-user"></i>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
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
        </Row>
      </Col>
    </Form>
  )
}
