import React from 'react';
import {Questions}  from './Questions';
import {useEffect,useState} from "react";
import {Typography, Divider, AppBar, Button,CssBaseline,Toolbar} from '@mui/material';


function App() {
  const [triviaData, setTriviaData] = useState();
  //const [loading, setLoading] = useState();
  //const [totalAnswered, setTotalAnswered] = useState(0);
  //const [totalCorrect, setTotalCorrect] = useState(0);
  const newQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
    .then((res) => res.json())
    .then((data) => setTriviaData(data.results))
     
  }
  useEffect(() => {
    newQuestions();
  }, [])


  if (!triviaData) 
  {
      return (
        <div>
          <h1> Pleses wait some time.... </h1> 
        </div>
      );
  }else{
      return (
        <>
          <CssBaseline/>
            <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Trivia app | Score:
              </Typography>
              <Button color="inherit">New Questions</Button>       
            </Toolbar>
          </AppBar>
          <main>
            <div>
                <Questions/>
            </div>
            <Button variant="contained" align="center"> Submit </Button>      
            <Divider />  
          </main>
        </>
      );
  }

}

export default App;
