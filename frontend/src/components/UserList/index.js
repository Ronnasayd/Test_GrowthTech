import React, { useEffect, useState } from "react";

import { Container, List, ListItem } from "./styles";
import { client } from "../../services/client";
import { addObservable } from "../../utils";
import { useHistory } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const elements = document.querySelectorAll(".observer");
    elements.forEach((element) => {
      element.classList.remove("entry");
    });

    addObservable(elements);
  });
  useEffect(() => {
    const getUsers = async () => {
      const response = await client.get("/users/");
      setUsers(response.data);
      console.log(response);
    };
    getUsers();
  }, []);
  return (
    <Container>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            className="ripple observer"
            onClick={() => {
              setTimeout(() => {
                history.push(`/user/${user.id}`);
              }, 500);
            }}
          >
            <p>{user.name}</p>
            <p>{user.company.name}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserList;
