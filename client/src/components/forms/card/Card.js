import React from "react";
import { styled, Avatar } from "@mui/material";
const Card = ({ name, surName, image, description }) => {
  return (
    <Container>
      <AvatarContent>
        <Avatar />
        <DataUser>
          {name} {surName}
        </DataUser>
      </AvatarContent>
      <ImageContent>
        <Image src={image} />
      </ImageContent>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;

const Container = styled("div")(() => ({
  width: "12%",
  background: "white",
  height: "28vh",
  display: "flex",
  flexDirection: "column",
  gap: "13px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  padding: "0px 10px 0px 10px",
  wordBreak: "break-word",
}));

const AvatarContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  padding: "10px 10px 0px 10px",
}));
const Image = styled("img")(() => ({
  width: "200px",
  backgroundSize: "contain",
}));

const ImageContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));
const Description = styled("p")(() => ({
  textAlign: "start",
  color: "red",
  textTransform: "uppercase",
}));

const DataUser = styled("h4")(() => ({
  textTransform: "capitalize",
  cursor: "pointer",
}));
