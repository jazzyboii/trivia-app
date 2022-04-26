import React from 'react';
import {triviaData} from "./trivia";
import {Typography, List, ListItem, ListItemText, Divider, AppBar, Button,CssBaseline,Toolbar, Container} from '@mui/material';
//url

function Answers(correctAns,incorrectAns1,incorrectAns2,incorrectAns3){
    const answers = [correctAns,incorrectAns1,incorrectAns2,incorrectAns3];
    shuffle(answers);
    return answers;
}
