import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Categories from './index';

describe('Categories', () => {
  it('should render list of categories', () => {
    render(<Categories values={{handleClick: () => {}, categorySelected: ''}} />);
    expect(screen.getByText('Engineering')).toBeInTheDocument();
    expect(screen.getByText('Productivity')).toBeInTheDocument();
    expect(screen.getByText('Money')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
  });

  it('should render item selected', () => {
    const handleClick = jest.fn();
    render(<Categories handleClick={handleClick} categorySelected='Engineering' />);
    expect(screen.getByText('Engineering')).toHaveStyle('background-color: #292929');
  });

  it('should call handleClick when click on item', () => {
    const handleClick = jest.fn();
    render(<Categories handleClick={handleClick} categorySelected='Engineering' />);
    fireEvent.click(screen.getByText('Engineering'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
