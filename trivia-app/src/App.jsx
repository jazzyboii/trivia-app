import React from 'react';
import Questions  from './Questions';
//import {useEffect,useState} from "react";
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
    constructor(props){
      super(props)
      this.handleScore = this.handleScore.bind(this)
      this.addCorrectAnswer = this.addCorrectAnswer.bind(this)
      this.state = {
          score: 0,
          showScore: false,
          correctAnswers:[]
      }
    }

    handleScore = (answer) => {
      if(this.state.correctAnswers.indexOf(answer) > -1){
        this.setState({
          score: this.state.score + 1
        })
      }

    
    }

    addCorrectAnswer(answer){
      if(!(this.state.correctAnswers.includes(answer))){
        this.state.correctAnswers.push(answer);
        console.log(this.state.correctAnswers)
      }
    }


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
                        Trivia app | Score: {this.state.score}
                      </Typography>
                      <Button color="inherit">New Questions</Button>       
                    </Toolbar>
                  </AppBar>
                <main>
                  <div>
                      <Questions
                        onHandleScore={this.handleScore}
                        onAddCorrectAnswer={this.addCorrectAnswer}
                      />
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
