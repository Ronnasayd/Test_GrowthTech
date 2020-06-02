import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { client } from "../../services/client";
import { Container, Item } from "./styles";
import { useParams } from "react-router-dom";

function UserDetail(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await client.get(`/users/${id}/`);
      setUser(response.data[0]);
    };
    getUser();
  }, [id]);
  return (
    <>
      <Header />
      <Container>
        <h3>User Info</h3>

        <div>
          <span>{user.name}</span>
          <span>@{user.username}</span>
        </div>

        <Item>
          <span>Email:</span>
          <span>{user.email}</span>
        </Item>
        <Item>
          <span>Phone:</span>
          <span>{user.phone}</span>
        </Item>
        <Item>
          <span>Website:</span>
          <span>{user.website}</span>
        </Item>
        <Item>
          <span>Street:</span>
          <span>{user.address?.street}</span>
        </Item>

        <Item>
          <span>Suite:</span>
          <span>{user.address?.suite}</span>
        </Item>
        <Item>
          <span>City:</span>
          <span>{user.address?.city}</span>
        </Item>
        <Item>
          <span>Zipcode:</span>
          <span>{user.address?.zipcode}</span>
        </Item>
      </Container>
      <Container>
        <h3>Company Info</h3>
        <Item>
          <span>Name:</span>
          <span>{user.company?.name}</span>
        </Item>
        <Item>
          <span>Catch Phrase:</span>
          <span>{user.company?.catchPhrase}</span>
        </Item>
        <Item>
          <span>Bs</span>
          <span>{user.company?.bs}</span>
        </Item>
      </Container>
    </>
  );
}

export default UserDetail;
