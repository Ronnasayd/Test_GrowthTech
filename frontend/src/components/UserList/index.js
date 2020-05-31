import React from "react";

import { Container, List, ListItem } from "./styles";
import { useEffect } from "react";
import { client } from "../../services/client";
import { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await client.get("/users");
      setUsers(response.data);
      console.log(response.data);
    };
    getUsers();
  }, []);
  return (
    <Container>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} className="ripple">
            <p>{user.username}</p>
            <p>{user.company.name}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserList;
