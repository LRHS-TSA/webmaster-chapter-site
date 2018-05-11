import React, { Component } from 'react'

import Home from './pages/Home'
import Courses from './pages/Courses'
import Program from './pages/Program'

import ScrollToTop from './components/ScrollToTop'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

import leap from './assets/LEAP.pdf'

import copyright from './assets/copyright.pdf'


export default class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={Home}/>
            <Route path="/courses"  component={Courses}/>
            <Route path="/program"  component={Program}/>
          </ScrollToTop>
        </Router>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='For TSA' />
                  <List link inverted>
                    <List.Item as='a' href={leap}>LEAP Resume</List.Item>
                    <List.Item as='a' href={copyright}>Copyright Checklist</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
