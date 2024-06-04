import React, { useEffect, useState } from "react";
import MatchItem from "./MatchItem";
import styled from "styled-components";
import axios from "axios";
import ResetButton from "../ResetButton/ResetButton";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 8px;
`;

function MatchList() {
  const [matches, setMatches] = useState([]);

  const getMatches = () =>{

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

  }
  useEffect(() => {
    getMatches()
  }, [matches]);

  
  return (
  <>{ getMatches ? 
    
    <ListContainer>
      {matches.map((profile) => {
        return <MatchItem profile={profile} />;
      })}
      <ResetButton />
    </ListContainer> : <div>Nenhum Match</div>
}
    </>
  );
}

export default MatchList;
