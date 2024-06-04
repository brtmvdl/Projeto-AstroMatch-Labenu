import React from "react";
import styled from "styled-components";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  padding: 10px;
`;

function AppBar(props) {
  return (
    <AppBarContainer>
      <HomeIcon
        color="secondary"
        fontSize="large"
        onClick={props.goToChooseProfilePage}
      />
      <Typography>Astromatch</Typography>
      <PeopleIcon
        color="primary"
        fontSize="large"
        onClick={props.goToMacthListPage}
      />
    </AppBarContainer>
  );
}

export default AppBar;
