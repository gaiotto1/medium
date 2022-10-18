import React, { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';

import { Container, ContainerPost } from './styles';

import Post from '../../components/Post';
import Title from '../../components/Title';

const Bookmarks = () => {
  const [userId, setUserId] = useState(null);  
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(user => {
      setUserId(user.uid);
    });

    return subscriber;
  }, []);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const bookmarksList = bookmarks.map(bookmark => {
      const post = posts.find(post => post.id == bookmark.id);
      return {
        ...bookmark,
        ...post,
      };
    });

    const bookmarksFiltered = bookmarksList.filter(bookmark => bookmark.authorSave == userId);

    setBookmarks(bookmarksFiltered);
  },[userId]);

  return (
    <Container>
      <Title title="Your lists" />
      <ContainerPost>
        {bookmarks.map((post, index) => (
          <Post key={index} post={post} disabledSave={true} disabledEdit={true} userId={userId} />
        ))}
      </ContainerPost>
    </Container>
  )
}

export default Bookmarks;