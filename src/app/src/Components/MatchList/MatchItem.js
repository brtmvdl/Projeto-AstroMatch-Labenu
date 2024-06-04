import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 50px;
  width: 50px;
`;

function MatchItem(props) {
  const profile = props.profile;

  return (
  
    <ListItemContainer>
      <Avatar src={profile.photo} alt="imagem" />
      <Typography>{profile.name}</Typography>
    </ListItemContainer>
    
  );
}

export default MatchItem;
