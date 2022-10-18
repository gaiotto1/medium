import React from 'react';

import PropTypes from "prop-types";

import { Container, Item } from './styles';

const Categories = ({ handleClick, categorySelected }) => {
  const listCategories = [
    {
      name: 'Engineering'
    },
    {
      name: 'Productivity'
    },
    {
      name: 'Money'
    },
    {
      name: 'Business'
    },
  ]
  return (
    <Container>
      <p>Categories:</p>
      {listCategories.map((item, index) => (
        <Item key={index} onClick={() => handleClick(item.name)} selected={categorySelected == item.name ? true : false}>{item.name}</Item>
      ))}
    </Container>
  );
};

export default Categories;

Categories.propTypes = {
  handleClick: PropTypes.func,
  categorySelected: PropTypes.string,
};
