import React, { useEffect } from "react";
import { addObservable } from "../../utils";
import { Container, List, ListItem, ItemHeader, ItemContent } from "./styles";
import { client } from "../../services/client";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDocumentReady } from "../../Hooks";

function PostList({ endpoint }) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useDocumentReady(() => {
    const elements = document.querySelectorAll(".observer");
    elements.forEach((element) => {
      element.classList.remove("entry");
    });
    addObservable(elements);
  });

  useEffect(() => {
    const getPosts = async () => {
      const response = await client.get(endpoint);

      setPosts(response.data);
    };
    window.scrollTo(0, 0);
    getPosts();
  }, [endpoint]);
  return (
    <Container>
      <List>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            className="ripple observer"
            onClick={() => {
              setTimeout(() => {
                history.push(`/user/${post.userId}`);
              }, 500);
            }}
          >
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
