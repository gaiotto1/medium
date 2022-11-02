import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Bookmarks from '../Pages/Bookmarks';
import NewStory from '../Pages/NewStory';
import StoriesDraft from '../Pages/StoriesDraft';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import EditStory from '../Pages/EditStory';
import Single from '../Pages/Single';
import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/new-story" element={<NewStory />} />
        <Route path="/edit-story/:postId" element={<EditStory />} />
        <Route path="/single/:postId" element={<Single />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/stories-draft" element={<StoriesDraft />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}