import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchList from "../MatchList/MatchList";

function Main() {
  const [selectedPage, setSelectedPage] = useState("choose-profile");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "choose-profile":
        return <ChooseProfilePage />;
      case "match-list":
        return <MatchList />;
      default:
        return <ChooseProfilePage />;
    }
  };

  const goToChooseProfilePage = () => {
    setSelectedPage("choose-profile");
  };

  const goToMacthListPage = () => {
    setSelectedPage("match-list");
  };

  return (
    <div>
      <AppBar
        goToChooseProfilePage={goToChooseProfilePage}
        goToMacthListPage={goToMacthListPage}
      />
      {renderSelectedPage()}
    </div>
  );
}

export default Main;
