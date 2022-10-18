import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSnackbar } from 'react-simple-snackbar';

import { Container, Wrapper } from './styles';

import Title from '../../components/Title';

const EditStory = () => {
  const [openSnackbar] = useSnackbar();
  const [title, setTitle] = useState('');
  const [smallDescription, setSmallDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('Engineering');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [disabled, setDisabled] = useState(false);

  const { postId } = useParams();

  const handleEditStory = () => {
    setDisabled(true);
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postFiltered = posts.find(post => post.id == postId);
    
    if (postFiltered) {
      const postUpdated = {
        ...postFiltered,
        title,
        smallDescription,
        image,
        category,
        content,
        status,
      };
  
      posts = posts.map(post => post.id == postId ? postUpdated : post);
      localStorage.setItem('posts', JSON.stringify(posts));
      openSnackbar('Post updated successfully!');
    }
  };

  const setFields = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postFiltered = posts.find(post => post.id == postId);

    if (postFiltered) {
      const { title, smallDescription, image, category, content, status } = postFiltered;
      setTitle(title);
      setSmallDescription(smallDescription);
      setImage(image);
      setCategory(category);
      setContent(content);
      setStatus(status);
    }
  };

  useEffect(() => {
    setFields();
  }, [postId]);
  
  return (
    <Container>
      <Title title="Tell your story" />
      <Wrapper onSubmit={(e) => { e.preventDefault(); handleEditStory(); }}>
        <div>
          <label>Title</label>
          <input
            name='title'
            type="text"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Small Description</label>
          <input
            name='smallDescription'
            type="text"
            placeholder='Small description'
            value={smallDescription}
            onChange={(e) => setSmallDescription(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Image</label>
          <input
            name='image'
            type="text"
            placeholder='Image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Category</label>
          <select
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Engineering">Engineering</option>
            <option value="Productivity">Productivity</option>
            <option value="Money">Money</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <label>Content</label>
          <textarea
            name='content'
            type="text"
            placeholder='Your message'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={disabled}
          onClick={() => setStatus('published')}
        >
          Publish
        </button>

        <button
          type="submit"
          disabled={disabled}
          onClick={() => setStatus('draft')}
        >
          Save as draft
        </button>
      </Wrapper>
    </Container>
  )
}

export default EditStory;