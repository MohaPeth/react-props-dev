import React from "react";
import PlayersList from "./PlayersList";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    //Utilisations de style de ligne
    <div className="App" style={{ background: "linear-gradient(to bottom, #5bc0de, #007bff)", overflowX: "hidden" }}>
      {/*Appel  du composant Header*/}
      <Header />

      <h1 className="text-center py-5" style={{ color: "white" }}>Football Players</h1>
      <PlayersList />

      {/*Pied de page */}
      <Footer />
    </div>
  );
}

export default App;
