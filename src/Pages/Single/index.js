import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Container, Wrapper } from './styles';

const Single = () => {
  const [post, setPost] = useState('');
  const { postId } = useParams();

  useEffect(() => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postFiltered = posts.find(post => post.id == postId);
    setPost(postFiltered);
  }, []);
  return (
    <Container>
      <Wrapper>
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
        <h2>{post.smallDescription}</h2>
        <p>{post.content}</p>
      </Wrapper>
    </Container>
  )
}

export default Single;