import React, { Component } from 'react'
import PageHeading from '../components/PageHeading'
import ParallaxDivider from '../components/ParallaxDivider'
import ClaimText from '../components/homepage/ClaimText'
import LeadershipTree from '../components/program/LeadershipTree';
import OfficerExert from '../components/program/OfficerExert';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Item
} from 'semantic-ui-react'


import intro from '../assets/programcover.JPG'
import programdivider from '../assets/architecture.JPG'

import president from '../assets/officers/ty.JPG'
import vice from '../assets/officers/holden.JPG'
import secretary from '../assets/officers/jared.JPG'
import treas from '../assets/officers/katie.JPG'
import reporter from '../assets/officers/chris.JPG'
import arms from '../assets/officers/emily.JPG'

const advisors = [
  {
    childKey: 0,
    header: 'Ben Long',
    description: 'Description',
    meta: 'longb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2050',
  },
  {
    childKey: 1,
    header: 'Bryan Richards',
    description: 'Description',
    meta: 'richardsb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2010',
  },
  {
    childKey: 2,
    header: 'Bryon Stedman',
    description: 'Description',
    meta: 'stedmanb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2153',
  },
  {
    childKey: 3,
    header: 'Daniel Shafer',
    description: 'Description',
    meta: 'shaferd@manateeschools.net',
    extra: '(941) 727-6100 ext. 2026',
  },
]



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
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Our Officers</a>
          </Divider>
          <OfficerExert
            name="Ty Wilcox"
            description="Ty Wilcox is a senior at Lakewood Ranch High School and currently serves as President of the LRHS TSA chapter. Some of Ty’s favorite events have been Engineering Design, Dragster Design, and Computer Integrated Manufacturing. Ty plans to attend the United States Military Academy Preparatory School. His favorite thing about TSA is the leadership aspect."
            image={president}
          />
          <OfficerExert
            name="Holden Scarbrough"
            description="Holden Scarbrough is a senior at Lakewood Ranch High School and currently serves as Vice President of the LRHS TSA chapter. Some of Holden’s favorite events have been Engineering Design, Future Technology Teacher, and Scientific Visualization. Holden plans to attend the University of Florida."
            image={vice}
          />
          <OfficerExert
            name="Jared Herbert"
            description="Jared Herbert is a senior at Lakewood Ranch High School and currently serves as Secretary of the LRHS TSA chapter. Some of Jared’s favorite events have been Transportation Modeling, Music Production, and Biotechnology Design. Jared plans to attend the University of Florida. Jared’s favorite thing about TSA is researching new topics and learning all about them."
            image={secretary}
          />
          <OfficerExert
            name="Katie Hartley"
            description="Katie Hartley is a sophomore at Lakewood Ranch High School and currently serves as Treasurer of the LRHS TSA chapter. Some of Katie’s favorite events have been Coding, Chapter Team, and Architectural Design. Katie’s favorite thing about TSA is learning new skills in programs for programming, design, and computer aided design."
            image={treas}
          />
          <OfficerExert
            name="Christopher Miller"
            description="Chris Miller is a senior at Lakewood Ranch High School and currently serves as Reporter of the LRHS TSA chapter. Some of Chris’s favorite events have been Architectural Design, Webmaster, and VEX Robotics. Chris plans to attend the University of Florida. Chris’s favorite thing about TSA is being given the topics to make something and having something to work for."
            image={reporter}
          />
          <OfficerExert
            name="Emily Miller"
            description="Emily Miller is a senior at Lakewood Ranch High School and currently serves as Sergeant-at-Arms of the LRHS TSA chapter. Some of Emily’s favorite events have been Essays on Technology, Biotechnology Design, and Children’s Stories. Emily plans to attend the University of Florida. Her favorite thing about TSA is the ability to expand her general knowledge about the STEM world and improve herself through leadership and technology."
            image={arms}
          />
        </Segment>
        <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Our Advisors</a>
          </Divider>
          <Grid centered columns={3} style={{ marginBottom: '3em' }} >
            <Grid.Column width={10}>
             <Item.Group items={advisors} />
            </Grid.Column>
          </Grid>
      </div>
    )
  }
}
