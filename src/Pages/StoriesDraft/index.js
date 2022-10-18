import React, { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';

import { Container, ContainerPost } from './styles';

import Post from '../../components/Post';
import Title from '../../components/Title';

const StoriesDraft = () => {
  const [userId, setUserId] = useState(null);  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(user => {
      setUserId(user.uid);
    });

    return subscriber;
  }, []);

  useEffect(() => { 
    if (userId) {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];

      const postsFiltered = posts.filter(post => post.author === userId && post.status === 'draft');

      setPosts(postsFiltered);
    }

  },[userId]);

  return (
    <Container>
      <Title title="Your stories in draft" />
      <ContainerPost>
        {posts.map((post, index) => (
          <Post key={index} post={post} disabledSave={true} userId={userId} />
        ))}
      </ContainerPost>
    </Container>
  )
}

export default StoriesDraft;