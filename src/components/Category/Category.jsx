import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Img from '../../assets/svgs/img.svg'

import {
  Button,
  Container,
  List,
  Input,
  StyledIconEdit,
  StyledIconDelete,

} from './styles'

const initialValue = {
  name: ''
}

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({ initialValue })
  const id = props.match.params._id;

  useEffect(() => {
    axios.get(`http://localhost:3333/api/category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch(error => { console.log(error) });
  }, []);

  async function handleDelete(_id) {
    const response = await axios.delete(`http://localhost:3333/api/category/${_id}`)
      .catch(error => { console.log(error) });
      window.location.reload();
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:3333/api/category/${id}`
      : `http://localhost:3333/api/category`

    axios[method](url, values)
    .then((response) => {
      window.location.reload();
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
        placeholder="Cadastrar categoria"
        onChange={onChange}
        value={values.name}
      >
      </Input>
      <Button onClick={() => onSubmit()}>Cadastrar</Button>
      <List>
        {categories.map(category => (
          <li key={category._id}>
            <Link to={'/product'}>
              <strong>{category.name}</strong>
            </Link>
            <div onClick={() => handleDelete(category._id)} >
              <StyledIconDelete />
            </div>
            <Link to={`/editcategory/${category._id}`}>
              <StyledIconEdit />
            </Link>
          </li>
        ))
        }
      </List>
    </Container >
  );
}
export default Category;