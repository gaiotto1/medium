import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'react-simple-snackbar';
import PropTypes from "prop-types";

import { Container, ContainerTags, ButtonSave, ButtonEdit  } from './styles';

const FooterPost = ({ category, disabledSave, disabledEdit, idPost, userId }) => {
  const [openSnackbar] = useSnackbar();

  const navigate = useNavigate();

  const handleEditPost = () => {
    navigate(`/edit-story/${idPost}`);
  }

  const savePost = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const existPost = bookmarks.find(bookmark => bookmark.id === idPost);

    if (existPost) {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter(bookmark => bookmark.id !== idPost)));
      openSnackbar('Post removed successfully.');
    } else {
      bookmarks.push({
        id: idPost,
        authorSave: userId,
      });
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      openSnackbar('Post saved successfully.');
    }
  }

  const postSaved = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  
    return bookmarks.find(bookmark => bookmark.id === idPost);
  }

  return (
    <Container>
      <ContainerTags>
        <a>{category}</a>
      </ContainerTags>

      {!disabledSave && (
        <ButtonSave onClick={savePost} saved={postSaved()} />
      )}

      {!disabledEdit && (
        <ButtonEdit onClick={handleEditPost} />
      )}
    </Container>
  );
};

export default FooterPost;

FooterPost.propTypes = {
  category: PropTypes.string.isRequired,
  disabledSave: PropTypes.bool,
  disabledEdit: PropTypes.bool,
  idPost: PropTypes.string,
  userId: PropTypes.string,
};