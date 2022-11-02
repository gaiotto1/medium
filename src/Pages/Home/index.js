import React, { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';

import { Container, ContainerPost, ContainerButtonLoadMore } from './styles';

import PostLarge from '../../components/PostLarge';
import Post from '../../components/Post';
import Categories from '../../components/Categories';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postLarge, setPostLarge] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);
  const [pagination, setPagination] = useState(1);

  const loadMore = () => {
    const page = pagination + 1;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (categorySelected) {
      const postsFiltered = posts.filter(post => post.category == categorySelected && post.status === 'published');

      setPostLarge(postsFiltered[0]);
      const postsPaginated = postsFiltered.slice(1, (page * 3) + 1);

      setPosts(postsPaginated);
    } else {
      const postsFiltered = posts.filter(post => post.status === 'published');

      setPostLarge(postsFiltered[0]);

      const postsPaginated = postsFiltered.slice(1, (page * 3) + 1);

      setPosts(postsPaginated);
    }

    setPagination(page);
  };

  const userIsAuthorPost = (authorId) => {
    return authorId == userId;
  }

  const filterCategory = (category) => {
    if (category == categorySelected) {
      setCategorySelected(null);
    } else {
      setCategorySelected(category);
    }
   
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const postsFiltered = posts.filter(post => post.category === category && post.status === 'published');
    setPagination(1);

    setPostLarge(postsFiltered[0]);
    setPosts(postsFiltered.slice(1, 4));
  }

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsFiltered = posts.filter(post => post.status === 'published');

    setPostLarge(postsFiltered[0]);

    setPosts(postsFiltered.slice(1, 4));
  }, []);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(user => {
      setUserId(user.uid);

      if (!user.uid) {
        navigate('/signin');
      }
    });

    return subscriber;
  }, []);

  return (
    <Container data-testid="ContainerHome">
      {postLarge && (
        <PostLarge post={postLarge} disabledSave={userIsAuthorPost(postLarge.author)} disabledEdit={!userIsAuthorPost(postLarge.author)} userId={userId} />  
      )}
      
      <Categories handleClick={(category) => filterCategory(category)} categorySelected={categorySelected} />

      <ContainerPost>
        {posts.map((post, index) => (
          <Post key={index} post={post} disabledSave={userIsAuthorPost(post.author)} disabledEdit={!userIsAuthorPost(post.author)} userId={userId} />
        ))}
      </ContainerPost>

      <ContainerButtonLoadMore>
        <button onClick={loadMore}>Load More</button>
      </ContainerButtonLoadMore>
    </Container>
  )
}

export default Home;