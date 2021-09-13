import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import PostDetails from './Components/PostDetails';
import Card from './Components/Card';
import BlogContextProvider from './Contexts/BlogContext';

const App = () => {
  return(
    <BrowserRouter>
    
    <BlogContextProvider>
    <Route path = '/' component = {Home} exact />
    <Route path = '/Card/' component = {Card} />
    <Route path = '/PostDetails/:id' component = {PostDetails} />

    </BlogContextProvider>

    </BrowserRouter>
    

  )
}

export default App;