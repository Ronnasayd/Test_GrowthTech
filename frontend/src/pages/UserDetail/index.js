import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { client } from "../../services/client";
import {
  Container,
  Card,
  Item,
  PersonalInfo,
  AddressInfo,
  CompanyInfo,
} from "./styles";
import { useParams } from "react-router-dom";
import locationSVG from "../../assets/images/location.svg";
import personSVG from "../../assets/images/person.svg";
import SideMenu from "../../components/SideMenu";
import Footer from "../../components/Footer";
import { useDocumentReady } from "../../Hooks";
import { addRipple } from "../../utils";

function UserDetail(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useDocumentReady(() => {
    setTimeout(() => {
      addRipple();
    }, 500);
  });
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
      <SideMenu />
      <Container>
        <Card>
          <div className="header">
            <h3>User Info</h3>
          </div>
          <div className="user-name">
            <span>{user.name}</span>
            <span>@{user.username}</span>
          </div>
          <img
            src={personSVG}
            alt="location info"
            className="icon-info person-icon"
          />
          <PersonalInfo>
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
              <span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`http://${user.website}`}
                >{`http://${user.website}`}</a>
              </span>
            </Item>
          </PersonalInfo>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://maps.google.com/maps?q=${user.address?.geo.lat},${user.address?.geo.lng}`}
          >
            <img src={locationSVG} alt="location" />
          </a>
          <AddressInfo>
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
          </AddressInfo>
        </Card>
        <Card>
          <h3>Company Info</h3>
          <CompanyInfo>
            <Item>
              <span>Name:</span>
              <span>{user.company?.name}</span>
            </Item>
            <Item>
              <span>Phrase:</span>
              <span>{user.company?.catchPhrase}</span>
            </Item>
            <Item>
              <span>Bs</span>
              <span>{user.company?.bs}</span>
            </Item>
          </CompanyInfo>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default UserDetail;
