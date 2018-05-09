import React, { Component } from 'react'
import PageHeading from '../components/PageHeading'
import ParallaxDivider from '../components/ParallaxDivider'
import ClaimText from '../components/homepage/ClaimText'
import ProgramWeb from '../components/program/ProgramWeb';
import OfficerExert from '../components/program/OfficerExert';

import {
  Container,
  Divider,
  Grid,
  Header,
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
    description: 'Mr. Long has been an advisor of the Lakewood Ranch High School TSA chapter for the last five years. Prior to working at LRHS, Long taught engineering courses at Richard Montgomery High School in Maryland. Following that, he was an advisor for the Brookside Middle School TSA chapter.',
    meta: 'longb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2050',
  },
  {
    childKey: 1,
    header: 'Bryan Richards',
    description: 'Mr. Richards has been working at LRHS for the past ten years. This is his first year teaching engineering and being an advisor for the LRHS TSA chapter. Along with helping at TSA meetings, Richards works as a football coach. Before becoming an engineering teacher, he was an IT and testing coordinator.',
    meta: 'richardsb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2010',
  },
  {
    childKey: 2,
    header: 'Bryon Stedman',
    description: 'Mr. Stedman has been teaching at LRHS for the past eighteen years as the television production teacher. This year he became a TSA advisor to aid our members in events containing video components. Prior to working at LRHS, Stedman taught at St. Cloud High School in Orlando.',
    meta: 'stedmanb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2153',
  },
  {
    childKey: 3,
    header: 'Daniel Shafer',
    description: 'Mr. Shafer has been teaching at LRHS for the past five years. This is his second year as a LRHS TSA advisor. Shafer teaches all orchestra classes at the school and works with events containing music components.',
    meta: 'shaferd@manateeschools.net',
    extra: '(941) 727-6100 ext. 2026',
  },
]



export default class Program extends Component {
  render() {
    return (
      <div>
        <PageHeading title="How We Do It" subtitle="Designing Leadership, Engineering Success" image={intro} />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <ClaimText
            header="Working Hard for Our Goals."
            text="Lakewood Ranch High School’s TSA chapter is highly devoted to each and every event that they compete in, including VEX Robotics. On December 16, 2017 our chapter hosted a VEX Tournament at our high school. For the VEX tournament they invited all schools--middle and high schools--in the area to compete in the tournament. Around 30 teams came to participate, and the event lasted from 8:00 in the morning to 6:00 in the evening, beginning with inspections and ending with an awards session. At the tournament, Lakewood Ranch High School TSA chapter members had the opportunity to volunteer, and in return received a portion of their state fees paid for using the money collected at the concession stand."
          />
          <ParallaxDivider image={programdivider} strength={300} />
          <Container>
           <Header as='h1' content='How We Do It' subheader="It's all in the students" />
            <p>Use the interactive chain of command below to see how LRHS TSA runs their TSA chapter. Click on the various points to see how they expand down the hierarchy</p>
            <p>At the bottom of the chain of command is the members. When the members need assistance or have problems they talk to their team leaders. If their problem persists, the team leader or member moves on to discuss with the small group leaders. Small group leaders are members that are officers or are on the executive committee. Each group has three to four events that the small group leader is in charge of. Above the small group leaders are the officers, headed by the president. At the top of the chain of command is the advisors.</p>
           <ProgramWeb />
          </Container>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            Our Officers
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
            Our Advisors
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
