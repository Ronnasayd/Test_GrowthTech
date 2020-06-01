import React from "react";

import { Container, List, ListItem, ItemHeader, ItemContent } from "./styles";
import { useEffect } from "react";
import { client } from "../../services/client";
import { useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await client.get("/posts");
      setPosts(response.data);
    };
    getPosts();
  }, []);
  return (
    <Container>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} className="ripple">
            <ItemHeader>
              <p>{post.user.name}</p>
              <p>{post.user.company_name}</p>
            </ItemHeader>
            <ItemContent>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </ItemContent>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PostList;
