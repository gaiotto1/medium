import React from 'react';
import { render, screen } from '@testing-library/react';
import Single from './index';

const postId = '1';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    postId: postId,
  }),
}));

const posts = [
  {
    id: '1',
    title: 'Post title single',
    smallDescription: 'smallDescription',
    content: 'content',
    image: 'image',
  },
];

describe('Single', () => {
  it('should render "Post not found" if post not found', () => {
    render(<Single />);
    expect(screen.getByText('Post not found')).toBeInTheDocument();
  });

  it('should render the component', () => {
    localStorage.setItem('posts', JSON.stringify(posts));
    render(<Single />);
    expect(screen.getByText('Post title single')).toBeInTheDocument();
  });
});