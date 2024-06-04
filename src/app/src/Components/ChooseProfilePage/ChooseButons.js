import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CancelIcon from "@material-ui/icons/Cancel";
import { CardActions } from "@material-ui/core";

const ButtonContainer = styled(CardActions)`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
`;

function ChooseButton(props) {
  return (
    
  <ButtonContainer>
      <CancelIcon
        color="primary"
        fontSize="large"
        onClick={props.onClickNo}
      ></CancelIcon>
      <FavoriteIcon
        color="secondary"
        fontSize="large"
        onClick={props.onClickYes}
      ></FavoriteIcon>
    </ButtonContainer>
    
  );
}

export default ChooseButton;

  
