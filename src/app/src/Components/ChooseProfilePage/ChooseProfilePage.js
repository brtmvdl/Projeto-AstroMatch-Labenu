import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ChooseButton from "./ChooseButons";
import axios from "axios";
import styled from 'styled-components';
import LinearIndeterminate from "./Loading";

const Loading = styled.div`
 margin-top: 200px;

`;


function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/person"
      )
      .then((response) => {
        setProfileToChoose(response.data.profile);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };
    setProfileToChoose(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/choose-person",
        body
      )
      .then((response) => {
        getProfileToChoose();
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <div>
          <ChooseButton onClickYes={onClickYes} onClickNo={onClickNo} />
          </div>
        </>
      ) : (
        <Loading>
        <LinearIndeterminate/>
        </Loading>
      )}
         
    </div>
  );
}

export default ChooseProfilePage;


