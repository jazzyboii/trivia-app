import React, { useState } from 'react';
import {triviaData} from "./trivia";
import {Typography, List, ListItem, ListItemText, Divider,Container} from '@mui/material';
import {decode} from 'html-entities';
    // handleSelected() {
    //     this.props.onHandleSelect();
    // }

        function Ans(choice){
            const [selected,setSelected] = useState(false);
            return (
                <>
                    <ListItem button onClick={() => {this.handleClick(choice);setSelected(true)}} selected={selected}>
                        <ListItemText primary={choice} />
                    </ListItem>   
                </>
            );
        }

        const Answer = ({myKey,correct_answer, incorrect_answer1,incorrect_answer2, incorrect_answer3}) => {  
            const arr = [correct_answer, incorrect_answer1,incorrect_answer2, incorrect_answer3]      
            return (
                <>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button onClick={() => this.handleClick(arr[0])} selected={false}>
                            <ListItemText primary={arr[0]} />
                        </ListItem>
                    <Divider />
                        <ListItem button onClick={() => this.handleClick(arr[1])} divider selected={false}>
                            <ListItemText  primary={arr[1]} />
                        </ListItem>
                        <ListItem button onClick={() => this.handleClick(arr[2])} selected={false}>
                            <ListItemText  primary={arr[2]} />
                        </ListItem>
                    <Divider light />
                        <ListItem button onClick={() => this.handleClick(arr[3])} selected={false}>
                            <ListItemText  primary={arr[3]} />
                        </ListItem>
                    </List>     
                </>
            );
        };

class Questions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected:true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(answer) {
        this.props.onHandleScore(answer);
        console.log(answer)
    }
    correctAnswers(correctAnswer){ 
        this.props.onAddCorrectAnswer(correctAnswer)   
    };    



    render(){

        const Question = ({myKey,question, correct_answer, incorrect_answer1,incorrect_answer2, incorrect_answer3}) => {
            return (
                <>
                    <Container maxWidth="sm">
                        <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                            {myKey}. {decode(question)}
                        </Typography>
                        <Answer
                            correct_answer={decode(correct_answer)}
                            incorrect_answer1={decode(incorrect_answer1)}
                            incorrect_answer2={decode(incorrect_answer2)}
                            incorrect_answer3={decode(incorrect_answer3)}
                            myKey={myKey}
                        />
                    </Container>
                    <Divider />      
                </>
            );
        };


        return (
            <>
                <div>        
                    {triviaData.map((data,key) => {
                        return (
                            <div key={key}>
                                {this.correctAnswers(decode(data.correct_answer))}
                                <Question
                                    question={data.question}
                                    correct_answer={data.correct_answer}
                                    incorrect_answer1={data.incorrect_answers[0]}
                                    incorrect_answer2={data.incorrect_answers[1]}
                                    incorrect_answer3={data.incorrect_answers[2]}
                                    myKey={key + 1}
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

