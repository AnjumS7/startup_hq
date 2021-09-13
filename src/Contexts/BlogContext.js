import React, {useState, createContext} from 'react';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    let [blogData, setBlogData]= useState([]);

    return(
        <BlogContext.Provider value = {{blogData, setBlogData}}>
            {props.children}

        </BlogContext.Provider>
    );


};

export default BlogContextProvider;