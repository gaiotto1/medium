import React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import FooterPost from '../FooterPost';

import { Container, ContainerText, ContainerImage } from './styles';

const PostLarge = ({ post, disabledSave = false, disabledEdit = false, userId = false}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerImage style={{backgroundImage: `url("${post.image}")`}} />
      
      <ContainerText>
        <a onClick={() => navigate(`/single/${post.id}`)}>{post.title}</a>
        <h2>{post.smallDescription}</h2>
      </ContainerText>

      <FooterPost category={post.category} disabledSave={disabledSave} disabledEdit={disabledEdit} idPost={post.id} userId={userId} />
    </Container>
  );
};

export default PostLarge;

PostLarge.propTypes = {
  post: PropTypes.object.isRequired,
  disabledSave: PropTypes.bool,
  disabledEdit: PropTypes.bool,
  userId: PropTypes.string,
};