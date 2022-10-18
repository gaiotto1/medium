import React from 'react';

import PropTypes from "prop-types";

import { Container, TitleText } from './styles';

const Title = ({ title }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
