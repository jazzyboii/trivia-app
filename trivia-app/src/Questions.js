import React from 'react';
import {triviaData} from "./trivia";
import {Typography, List, ListItem, ListItemText, Divider,Container} from '@mui/material';



export const Questions = () => {

      return (
        <>
          <div>        
            {triviaData.map((data,key) => {
                return (
                    <div key={key}>
                        <>
                            <Container maxWidth="sm">
                                <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                                    {data.question}
                                </Typography>
                                <List component="nav" aria-label="mailbox folders">
                                <ListItem button selected="true">
                                    <ListItemText primary={data.correct_answer} />
                                </ListItem>
                                <Divider />
                                <ListItem button divider>
                                    <ListItemText primary={data.incorrect_answers[0]} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary={data.incorrect_answers[1]} />
                                </ListItem>
                                <Divider light />
                                <ListItem button>
                                    <ListItemText primary={data.incorrect_answers[2]} />
                                </ListItem>
                                </List>
                            </Container>
                            <Divider />      
                       </>
                    </div>
                );
            })}
          </div>
        </>
      );
}; 

const Question = ({ question, correct_answer, incorrect_answer1,incorrect_answer2, incorrect_answer3}) => {
    return (
        <>
        <Container maxWidth="sm">
            <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                {question}
            </Typography>
            <List component="nav" aria-label="mailbox folders">
            <ListItem button selected="true">
                <ListItemText primary={correct_answer} />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText primary={incorrect_answer1} />
            </ListItem>
            <ListItem button>
                <ListItemText primary={incorrect_answer2} />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary={incorrect_answer3} />
            </ListItem>
            </List>
        </Container>
        <Divider />      
        </>
    );
  };
