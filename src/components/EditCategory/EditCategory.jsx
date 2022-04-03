import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Img from '../../assets/svgs/img.svg';

import {
  Button,
  Container,
  Input,

} from './styles'

const editCategory = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState();
  const _id = props.match.params.id;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (_id) {
      axios.get(`http://localhost:3333/api/category/${_id}`)
        .then((response) => {
          setValues(response.data);
        })
        .catch(error => { console.log(error) });
    }
  }, [_id]);



  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    const method = _id ? 'put' : 'post';
    const url = _id
      ? `http://localhost:3333/api/category/${_id}`
      : `http://localhost:3333/api/category`

    axios[method](url, values)
  }

  return (
    <Container>
      <img src={Img} alt="img" />
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Editar categoria"
        onChange={onChange}
      >
      </Input>
      <Link to={'/'}>
        <Button onClick={() => onSubmit()}>Salvar e voltar</Button>
      </Link>
    </Container>
  );
}
export default editCategory;