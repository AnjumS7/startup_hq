import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { BlogContext } from '../Contexts/BlogContext';
import Comments from './Comments';

const PostDetails = () => {
    const {blogData} = useContext(BlogContext);

    
    const {id} = useParams();
    const postData = blogData.filter((post) => {
        return post.id == id;
    })


    return(
    <div class="p-10">
        <div class=" w-full lg:max-w-full lg:flex">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">Post Title : {postData[0].title}</div>
                        <p class="text-gray-700 text-base">Post Details : {postData[0].body}</p>
                </div>

                <div class="text-gray-900 font-bold text-xl mb-2">Comments : </div>
                <div class="flex items-center">
                <div class="text-sm">
                    <Comments postID = {postData[0].id} />
                </div>
            </div>
        </div>
    </div>
  </div>
    

    )
}

export default PostDetails;