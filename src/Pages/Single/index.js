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
        {post ? (
          <>
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <p>{post.smallDescription}</p>
            <p>{post.content}</p>
          </>

        ) : (
          <h1>Post not found</h1>
        )}
      </Wrapper>
    </Container>
  )
}

export default Single;