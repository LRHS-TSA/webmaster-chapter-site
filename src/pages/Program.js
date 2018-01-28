import React, { Component } from 'react'
import PageHeading from '../components/PageHeading'
import ParallaxDivider from '../components/ParallaxDivider'
import ClaimText from '../components/homepage/ClaimText'
import LeadershipTree from '../components/program/LeadershipTree';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'


import intro from '../assets/programcover.JPG'
import programdivider from '../assets/architecture.JPG'


export default class Program extends Component {
  render() {
    return (
      <div>
        <PageHeading title="How We Do it" subtitle="Designing Leadership, Engineering Success" image={intro} />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <ClaimText
            header="Working Hard for Our Goals."
            text="Lakewood Ranch High School’s TSA chapter is highly devoted to each and every event that they compete in, including VEX Robotics. On December 16, 2017 our chapter hosted a VEX Tournament at our high school. For the VEX tournament they invited all schools--middle and high schools--in the area to compete in the tournament. Around 30 teams came to participate, and the event lasted from 8:00 in the morning to 6:00 in the evening, beginning with inspections and ending with an awards session. At the tournament, Lakewood Ranch High School TSA chapter members had the opportunity to volunteer, and in return received a portion of their state fees paid for using the money collected at the concession stand."
          />
          <ParallaxDivider image={programdivider} strength={300} />
          <Container>
           <Header as='h1' content='How We Do It' subheader="It's all in the students" />
          </Container>
          <LeadershipTree />
        </Segment>
      </div>
    )
  }
}
