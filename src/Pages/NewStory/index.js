import React, { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import { auth } from '../../services/firebase';

import { Container, Wrapper } from './styles';

import Title from '../../components/Title';
import { useEffect } from 'react';

const NewStory = () => {
  const [openSnackbar] = useSnackbar();
  const [userId, setUserId] = useState(true);
  const [title, setTitle] = useState('');
  const [smallDescription, setSmallDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('Engineering');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(user => {
      setUserId(user.uid);
    });

    return subscriber;
  }, []);
  
  async function handleCreateNewStory() {
    setDisabled(true);
    const author = userId;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.push({
      id: new Date().getTime(), 
      title,
      smallDescription,
      image,
      category,
      content,
      status,
      author,
    });

    localStorage.setItem('posts', JSON.stringify(posts));
    openSnackbar('Story created successfully.');
    setDisabled(false);
  }

  return (
    <Container>
      <Title title="Tell your story" />
      <Wrapper onSubmit={(e) => { e.preventDefault(); handleCreateNewStory(); }}>
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
          <label>Image url</label>
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

export default NewStory;