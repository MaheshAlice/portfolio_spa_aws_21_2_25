import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Use Vite's env format
const bloggerApiKey = import.meta.env.VITE_GOOGLE_API_KEY_BLOGGER; // Use Vite's env format

const BloggerAPI = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // Handle successful login
  const handleLoginSuccess = async (response) => {
    console.log("Login Success:", response);
    const token = response.credential;
    setAccessToken(token);

    // Fetch Blogger Data
    fetchBloggerData(token);
  };

  // Handle login failure
  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  // Fetch Blogger API Data
  const fetchBloggerData = async (token) => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/blogger/v3/users/self/blogs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Blogger API Response:", res.data);
      setBlogs(res.data.items || []);
    } catch (error) {
      console.error("Error fetching Blogger API:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Google Blogger API Authentication</h2>

        {!accessToken ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        ) : (
          <div>
            <h3>Authenticated!</h3>
            <button onClick={() => setAccessToken(null)}>Logout</button>

            <h3>Your Blogs:</h3>
            <ul>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <li key={blog.id}>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      {blog.name}
                    </a>
                  </li>
                ))
              ) : (
                <p>No blogs found.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default BloggerAPI;

