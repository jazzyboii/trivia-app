import React from 'react';
import {triviaData} from "./trivia";
import {Typography, List, ListItem, ListItemText, Divider,Container} from '@mui/material';
import {decode} from 'html-entities';


class Questions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        
        this.setState({
            score: this.state.score + 1
        })
        console.log(this.state.score)
    }
    render(){

        const Question = ({question, correct_answer, incorrect_answer1,incorrect_answer2, incorrect_answer3}) => {
            
            return (
                <>
                    <Container maxWidth="sm">
                        <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                            {decode(question)}
                        </Typography>
                        <Answer
                            correct_answer={correct_answer}
                            incorrect_answer1={incorrect_answer1}
                            incorrect_answer2={incorrect_answer2}
                            incorrect_answer3={incorrect_answer3}
                        />
                    </Container>
                    <Divider />      
                </>
            );
        };
        const Answer = ({correct_answer, incorrect_answer1,incorrect_answer2, incorrect_answer3}) => {
            
            return (
                <>
                    <List component="nav" aria-label="mailbox folders">
                    <ListItem button onClick={this.handleClick} selected={true}>
                        <ListItemText primary={decode(correct_answer)} />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary={decode(incorrect_answer1)} />
                    </ListItem>
                    <ListItem button >
                        <ListItemText primary={decode(incorrect_answer2)} />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary={decode(incorrect_answer3)} />
                    </ListItem>
                    </List>     
                </>
            );
        };

        return (
            <>
                <div>        
                    {triviaData.map((data,key) => {
                        return (
                            <div key={key}>
                                <Question
                                    key={key}
                                    question={data.question}
                                    correct_answer={data.correct_answer}
                                    incorrect_answer1={data.incorrect_answers[0]}
                                    incorrect_answer2={data.incorrect_answers[1]}
                                    incorrect_answer3={data.incorrect_answers[2]}
                                />
                            </div>
                        );
                    })}
                </div>
            </>            
        );
    }
}






export default Questions;

