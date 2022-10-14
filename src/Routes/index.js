import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Bookmarks from '../Pages/Bookmarks';
import NewStory from '../Pages/NewStory';

export function Router () {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new-story" element={<NewStory />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  )
}