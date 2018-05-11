import React, { Component } from 'react'
import ClaimText from '../components/homepage/ClaimText'
import QuoteColumn from '../components/homepage/QuoteColumn'
import NewsExert from '../components/homepage/NewsExert'
import ParallaxSegment from '../components/homepage/ParallaxSegment'
import PageHeading from '../components/PageHeading'
import ParallaxDivider from '../components/ParallaxDivider'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import CountUp from 'react-countup';

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

import intro from '../assets/cover.JPG'
import introThumb from '../assets/thumbnail/cover.jpg'

import divider from '../assets/divider.JPG'
import dividerThumb from '../assets/thumbnail/divider.jpg'

import national from '../assets/nationalemblem.png'

const data = [
  {name: 'First Place', Count: 3},
  {name: 'Second Place', Count: 1},
  {name: 'Third Place', Count: 5},
  {name: 'Fourth Place', Count: 4},
  {name: 'Fifth Place', Count: 1}
];

const creedSegment = [
  {
    start: "90vh",
    end: "130vh",
    properties: [
      {
        startValue: 0,
        endValue: 40,
        property: "translateY",
        unit: "vh"
      }    
    ]
  },
  {
    start: "130vh",
    end: "140vh",
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      }    
    ]    
  }
]

const restOfPage = [
  {
    start: "100vh",
    end: "140vh",
    easing: "easeIn",
    properties: [
      {
        startValue: 80,
        endValue: 0,
        property: "translateY",
        unit: "vh"
      }    
    ]
  }
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeading title="Lakewood Ranch TSA" subtitle="Learning to Lead in a Technical World" image={intro} thumbnail={introThumb} />
        
        <ParallaxSegment parallaxEffect={creedSegment} segmentStyle={{ padding: '8em 0em' }}>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <ClaimText
                  header="The TSA Creed"
                  text="I believe that Technology Education holds an important place in my life in the technical world. I believe there is a need for the development of good attitudes concerning work, tools, materials, experimentation, and processes of industry. Guided by my teachers, artisans from industry, and my own initiative, I will strive to do my best in making my school, community, state, and nation better places in which to live. I will accept the responsibilities that are mine. I will accept the theories that are supported by proper evidence. I will explore on my own for safer, more effective methods of working and living. I will strive to develop a cooperative attitude and will exercise tact and respect for other individuals. Through the work of my hands and mind, I will express my ideas to the best of my ability. I will make it my goal to do better each day the task before me, and to be steadfast in my belief in my God, and my fellow Americans."
                />
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  size='large'
                  src={national}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ParallaxSegment>

      <ParallaxSegment parallaxEffect={restOfPage}>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <QuoteColumn quote="I am so happy that I was able to get together with TSA members from other schools and plan the Manatee County TSA District Competition" quoteAuthor="Holden Scarbrough" authorPosition="2016-2017 Manatee County TSA District President" />
              <QuoteColumn quote="Lakewood Ranch TSA provides an atmosphere to learn and create products that can make an impact on the world. With a chapter lead by students and for students, members get the best leadership experience available.It is a great honor to be president of such an incredible organization and for our future leaders, continue designing leadership and engineering success." quoteAuthor="Ty Wilcox" authorPosition="LRHS TSA President" />
              <QuoteColumn quote="Becoming a TSA state officer to the best state in the nation was truly an honor and has been one of the most exciting experiences of my life that I wish everyone could have the opportunity to encounter." quoteAuthor="Spencer Waid" authorPosition="FL TSA State Vice President" />
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <NewsExert
              header="An Impressive Track Record"
              exert="The Lakewood Ranch High School TSA chapter has been consistently in the top four schools at the state level for several years. At the 2017 Florida TSA State Conference the LRHS chapter was awarded three first places, one second place, five third places, and thirty one top tens. Overall, the LRHS chapter placed fourth and numerous students went home with scholarships and certificates of achievements. At the 2017 National TSA Conference the LRHS chapter was awarded two third places and five top tens. At the 2017 State VEX Robotics Competition, the LRHS Robotics team placed in top three for the design award."
            />
            <Grid columns={3} divided style={{ marginTop: '1em' }}>
              <Grid.Row>
                <Grid.Column>
                  <Header size='huge' textAlign='center'>
                    <Header.Content>
                    <CountUp start={0} end={49} />
                    </Header.Content>

                    <Header.Subheader>
                    Total First Places
                    </Header.Subheader>
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <Header size='huge' textAlign='center'>
                    <Header.Content>
                    <CountUp start={0} end={163} />
                    </Header.Content>

                    <Header.Subheader>
                    Total Top Threes
                    </Header.Subheader>
                  </Header>
                </Grid.Column>
                <Grid.Column>
                 <Header size='huge' textAlign='center'>
                    <Header.Content>
                    <CountUp start={0} end={352} />
                    </Header.Content>

                    <Header.Subheader>
                    Total Top Tens
                    </Header.Subheader>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              Placings at the 2017 State Conference
            </Divider>
            <BarChart width={600} height={300} data={data} style={{margin: 'auto'}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="Count" fill="#8884d8" />
            </BarChart>
          </Container>
        </Segment>
      </ParallaxSegment>
      </div>
    )
  }
}
