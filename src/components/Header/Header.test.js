import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('../../services/firebase', () => ({
  ...jest.requireActual('../../services/firebase'),
  signOut: () => Promise.resolve(),
  auth: {
    user: {
      uid: '123',
    },
  },
}));

describe('Header', () => {
  it('should render logo and icons menu', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('should render home icon', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('should render bookmarks icon', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('bookmarks')).toBeInTheDocument();
  });

  it('should render stories-draft icon', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('stories-draft')).toBeInTheDocument();
  });

  it('should render new-story icon', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('new-story')).toBeInTheDocument();
  });

  it('should render logout button', () => {
    render(
      <Header />
    );
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should call signOut function when click on logout button', () => {
    render(
      <Header />
    );
    fireEvent.click(screen.getByText('Sign out'));
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should call navigate function when click on home icon', () => {
    render(
      <Header />
    );
    fireEvent.click(screen.getByTestId('home'));
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('should call navigate function when click on bookmarks icon', () => {
    render(
      <Header />
    );
    fireEvent.click(screen.getByTestId('bookmarks'));
    expect(screen.getByTestId('bookmarks')).toBeInTheDocument();
  });

  it('should call navigate function when click on stories-draft icon', () => {
    render(
      <Header />
    );
    fireEvent.click(screen.getByTestId('stories-draft'));
    expect(screen.getByTestId('stories-draft')).toBeInTheDocument();
  });

  it('should call navigate function when click on new-story icon', () => {
    render(
      <Header />
    );
    fireEvent.click(screen.getByTestId('new-story'));
    expect(screen.getByTestId('new-story')).toBeInTheDocument();
  });
});
