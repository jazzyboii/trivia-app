import React from 'react';
import Questions  from './Questions';
import {useEffect,useState} from "react";
import {Typography, Divider, AppBar, Button,CssBaseline,Toolbar} from '@mui/material';
  // const [triviaData, setTriviaData] = useState();
  // const newQuestions = () => {
  //   fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
  //   .then((res) => res.json())
  //   .then((data) => setTriviaData(data.results))
     
  // }
  // useEffect(() => {
  //   newQuestions();
  // }, [])


class App extends React.Component{

    render(){
        if (!true) 
        {
            return (
              <div>
                <h1> Please wait some time.... </h1> 
              </div>
            );
        }else{
            return (
              <>
                <CssBaseline/>
                  <AppBar position="sticky">
                    <Toolbar>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Trivia app | Score: {0}
                      </Typography>
                      <Button color="inherit">New Questions</Button>       
                    </Toolbar>
                  </AppBar>
                <main>
                  <div>
                      <Questions/>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                    <Button variant="contained" align="center"> Submit </Button> 
                  </div>
                  <Divider />  
                </main>
              </>
            );
        }      
    }
}

export default App;
