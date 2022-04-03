import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Img from '../../assets/svgs/img.svg';

import {
  Button,
  Container,
  List,
  Input,
  StyledIconEdit,
  StyledIconDelete,

} from './styles'

const initialValue = {
  name: '',
  code: '',
  quantity: '',
  is_active: '',
  unkey: '',
}

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({ initialValue });
  const history = useHistory(); 

  const id = props.match.params._id;

  useEffect(() => {
    axios.get(`http://localhost:3333/api/product`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(error => { console.log(error) });
  }, []);

  async function handleDelete(_id) {
    const response = await axios.delete(`http://localhost:3333/api/product/${_id}`)
      .catch(error => { console.log(error) });
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:3333/api/product/${id}`
      : `http://localhost:3333/api/product`

    axios[method](url, values)
    .then((response) => {
      history.push('/product')
     })
      .catch(error => { console.log(error) });
  }

  return (
    <Container>
      <img src={Img} alt="img" />
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Cadastrar produto"
        onChange={onChange}
        value={values.name}
      >
      </Input>
      <Input
        id="code"
        name="code"
        type="text"
        placeholder="Código do produto"
        onChange={onChange}
        value={values.code}
      >
      </Input>
      <Input
        id="quantity"
        name="quantity"
        type="text"
        placeholder="Cadastrar quantidade"
        onChange={onChange}
        value={values.quantity}
      >
      </Input>
      <Input
        id="is_active"
        name="is_active"
        type="text"
        placeholder="Ativo"
        onChange={onChange}
        value={values.is_active}
      >
      </Input>
      <Button onClick={() => onSubmit()}>Cadastrar</Button>
      <Link to={'/'}>
        <Button>Voltar</Button>
      </Link>

      <List>
        {products.map(product => (
          <li key={product._id}>
            <ul><strong>Produto: {product.name}</strong></ul>
            <ul><strong>Código: {product.code}</strong></ul>
            <ul><strong>Quantidade: {product.quantity}</strong></ul>
            <ul><strong>Ativo: {product.is_active ? 'Sim' : 'Não'}</strong></ul>
            <div onClick={() => handleDelete(product._id)} >
              <StyledIconDelete />
            </div>
            <Link to={`/editproduct/${product._id}`}>
              <StyledIconEdit />
            </Link>
          </li>
        ))
        }
      </List>
    </Container >
  );
}
export default Product;