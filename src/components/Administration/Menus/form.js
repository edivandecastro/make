import React, { useRef, useState } from "react";
import { Form } from "@unform/web";
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from 'react-bootstrap/FormGroup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Form/input';
import { actionCreateMenu } from '../../../store/Menus/Menus.action'
import Notification from '../../System/Util/Notification';

const initialOptions = (menus, ancestors=[], parent_id) => {
  let options = [];

  if (parent_id && !ancestors.find(p => p === parent_id)) {
    ancestors.push(parent_id);
  }

  let new_ancestors = ancestors.flat()

  menus.forEach(menu => {
    const option = { value: menu._id, label: menu.name, ancestors: new_ancestors }
    options.push(option);

    if(menu.submenus.length > 0) {
      options = options.concat(initialOptions(menu.submenus, ancestors, menu._id))
    }

    ancestors = new_ancestors.flat()
  });

  return options;
}

const showMessageErrorCreateMenu = (errors) => {
  if (errors.create_menu) {
    let message = errors.create_menu.message

    if (errors.create_menu.reason.length > 0) {
      message += ': '
      let count_reason = 0;
      errors.create_menu.reason.forEach(reason => {
        message += reason
        count_reason++
        if (count_reason < errors.create_menu.reason.length) {
          message += ', '
        }
      })
    }

    return message
  }
}

const hasErrorCreateMenu = (errors) => {
  if (errors.create_menu) {
    return true
  }
  else {
    return false
  }
}

const initialData = {
}

export default function FormAdministration() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { menus } = useSelector(state => state.menus);
  const { errors } = useSelector(state => state.menus );

  const [selectedOption, setSelectedOption] = useState(null);

  async function handleSubmit(data, { reset }) {
    if (selectedOption) {
      let ancestors = selectedOption.ancestors
      ancestors.push(selectedOption.value)
      data.ancestors = ancestors
    }

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        iconName: Yup.string().required('O ícone é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      dispatch(actionCreateMenu(data));

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
                  <Notification
                    message={showMessageErrorCreateMenu(errors)}
                    context="error"
                    show={hasErrorCreateMenu(errors)} />
                </Col>
              </Row>
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
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Col className="prepend-icon">
                      <Input type="text" className="form-control" name="iconName" placeholder="Ícone" />
                      <i className="icon-grid"></i>
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
        </Row>
      </Col>
    </Form>
  )
}
