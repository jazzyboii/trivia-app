import React from 'react';
//import ReactDOM from 'react-dom';
//import Button from '@mui/material/Button';
import {Typography, List, ListItem, ListItemText, Divider, AppBar,ButtonGroup, Button, Card, CardActions,CardContent, CardMedia,CssBaseline, Grid,Toolbar, Container} from '@mui/material';
//import {Typography, AppBar,CssBaseline,Toolbar, Container} from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant = "h6" >
            Trivia App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
              <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
                  Question #1
              </Typography>
              <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <ListItemText primary="Answer#1" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Answer#2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Answer#3" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Answer#4" />
                </ListItem>
              </List>
          </Container>
        <Divider />
          <Container maxWidth="sm">
              <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
                  Question #2
              </Typography>
              <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <ListItemText primary="Answer#1" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Answer#2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Answer#3" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Answer#4" />
                </ListItem>
              </List>
          </Container>
        <Divider />
          <Container maxWidth="sm">
              <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
                  Question #3
              </Typography>
              <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <ListItemText primary="Answer#1" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Answer#2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Answer#3" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Answer#4" />
                </ListItem>
              </List>
          </Container>
        <Divider />
        </div>
      </main>
    </>
  );
}


export default App;