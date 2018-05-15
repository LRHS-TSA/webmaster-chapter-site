import React, { Component } from 'react'
import ClaimText from '../components/homepage/ClaimText'
import QuoteColumn from '../components/homepage/QuoteColumn'
import NewsExert from '../components/homepage/NewsExert'
import ParallaxSegment from '../components/homepage/ParallaxSegment'
import PageHeading from '../components/PageHeading'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import CountUp, { startAnimation } from 'react-countup';
import Waypoint from 'react-waypoint';

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


import national from '../assets/nationalemblem.png'

const data = [
  {name: 'First Place', Count: 4},
  {name: 'Second Place', Count: 5},
  {name: 'Third Place', Count: 6},
  {name: 'Fourth Place', Count: 2},
  {name: 'Fifth Place', Count: 3}
];

const restOfPage = [
  {
    start: "90vh",
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

  constructor(props) {
    super(props)

    this.state = {
      desktop: true
    }
  }

  resize() {
    this.setState({desktop: window.innerWidth > 480});
    console.log(this.state.desktop)
    this.creedSegment = [
      {
        start: "90vh",
        end: this.state.desktop ? "130vh" : "100vh",
        properties: [
          {
            startValue: 0,
            endValue: this.state.desktop ? 40 : 0,
            property: "translateY",
            unit: "vh"
          }    
        ]
      },
      {
        start: this.state.desktop ? "130vh" : "150vh",
        end: this.state.desktop ? "140vh" : "160vh",
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: "opacity"
          }    
        ]    
      }
    ]
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  render() {
    return (
      <div>
        <PageHeading title="Lakewood Ranch TSA" subtitle="Learning to Lead in a Technical World" image={intro} thumbnail={introThumb} inverted />
        
        <ParallaxSegment parallaxEffect={this.creedSegment} segmentStyle={{ padding: '8em 0em' }}>
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
              exert="At the 2017 National TSA Conference the LRHS chapter was awarded two third places and five top tens. At the 2017 State VEX Robotics Competition, the LRHS Robotics team placed in top three for the design award. The Lakewood Ranch High School TSA chapter has been consistently in the top four schools at the state level for several years. At the 2018 Florida TSA State Conference the LRHS chapter was awarded four first places, five second place, six third places, and twenty nine top tens. Overall, the LRHS chapter placed second and numerous students went home with scholarships and certificates of achievements."
            />
            <Waypoint onEnter={() => { startAnimation(this.firsts); startAnimation(this.threes); startAnimation(this.tens);}}>
              <div>
                <Grid columns={3} style={{ marginTop: '1em' }}>
                  <Grid.Row>
                    <Grid.Column>
                      <Header size='huge' textAlign='center'>
                        <Header.Content>
                        <CountUp start={0} end={53} redraw ref={(countUp) => {
                          this.firsts = countUp;
                        }} />
                        </Header.Content>

                        <Header.Subheader>
                        Total First Places
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Header size='huge' textAlign='center'>
                        <Header.Content>
                        <CountUp start={0} end={178} ref={(countUp) => {
                          this.threes = countUp;
                        }} />
                        </Header.Content>

                        <Header.Subheader>
                        Total Top Threes
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                    <Header size='huge' textAlign='center'>
                        <Header.Content>
                        <CountUp start={0} end={381} ref={(countUp) => {
                          this.tens = countUp;
                        }} />
                        </Header.Content>

                        <Header.Subheader>
                        Total Top Tens
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Waypoint>

            <div className="hide-mobile">
              <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
              >
                Placings at the 2018 State Conference
              </Divider>
            </div>
            <BarChart width={600} height={300} data={data} style={{margin: 'auto'}} className="hide-mobile">
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
