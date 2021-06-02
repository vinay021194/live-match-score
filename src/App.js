import React, { Fragment, useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, } from "@material-ui/core";
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
         <Grid container>
         <Grid sm="2"></Grid>
         <Grid sm ="8">
           {matches.map((match)=>(
             <MyCard match ={match}/>
           ))}

          </Grid>
        </Grid> 
      </Container>
    </div>
  );
}

export default App;
