import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const BloggerAPI = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await gapi.client.blogger.blogs.listByUser({
        userId: 'self',
      });
      setBlogs(response.result.items);
    };

    gapi.load('client', () => {
      gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY_BLOGGER);
      gapi.client.load('blogger', 'v3', fetchBlogs);
    });
  }, []);

  return (
    <div>
      <h1>My Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BloggerAPI;
