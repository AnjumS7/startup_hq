import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import axios from 'axios';
import { BlogContext } from '../Contexts/BlogContext';

const Home = () => {

    const {blogData, setBlogData} = useContext(BlogContext);
    
    const InitialFetch = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        const Data = res.data;
        //console.log(Data);
        setBlogData(Data);

    }


    useEffect(InitialFetch,[]);

    return(
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <Card blogPost = {blogData} />
        </div>
    )
}

export default Home;