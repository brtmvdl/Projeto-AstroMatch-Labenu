import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import styled from "styled-components";

const ButtonDel = styled.div`
  bottom: 10px;
  position: fixed;
  
`

function ResetButton() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/matches"
    )
    .then((response) => {
      console.log(response.data.matches);
      setMatches(response.data.matches);
    })
    .catch((erro) => {
      console.log(erro);
    });
  }, [matches]);


  const onClickReset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/clear"
      )
      .then((resposta) => {
        console.log(resposta.data);
       
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <ButtonDel>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={onClickReset}
      >
         matches
      </Button>
    </ButtonDel>
  );
}

export default ResetButton;
