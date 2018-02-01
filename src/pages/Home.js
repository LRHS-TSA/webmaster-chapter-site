import React, { Component } from 'react'
import ClaimText from '../components/homepage/ClaimText'
import QuoteColumn from '../components/homepage/QuoteColumn'
import NewsExert from '../components/homepage/NewsExert'
import PageHeading from '../components/PageHeading'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

import intro from '../assets/cover.JPG'

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeading title="Lakewood Ranch TSA" subtitle="Learning to Lead in a Technical World" link="/program" linkLabel="Get Started" image={intro} />
        <Segment style={{ padding: '8em 0em' }} vertical>
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
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <QuoteColumn quote="We're Pretty Good" quoteAuthor="Mr.Long" />
              <QuoteColumn quote="He's Probably Lying" quoteAuthor="Mr.Richards" />
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <NewsExert
              header="More Than Just TSA"
              exert="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue."
            />
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>In the News</a>
            </Divider>
            <NewsExert
              header="News!"
              exert="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue."
            />
          </Container>
        </Segment>
      </div>
    )
  }
}
