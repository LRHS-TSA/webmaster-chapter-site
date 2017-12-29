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


export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeading title="Lakewood Ranch TSA" subtitle="Designing Leadership, Engineering Success" link="/about" linkLabel="Get Started" />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <ClaimText
                  header="Go Mustangs!"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue. Integer tristique neque arcu, ut condimentum nisl pellentesque eget. Ut in lorem molestie, sollicitudin risus nec, laoreet enim. Vivamus imperdiet tristique ullamcorper. Pellentesque ut molestie felis."
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
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Learn More</Button>
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
            <Header as='h3' style={{ fontSize: '2em' }}>More Than Just TSA</Header>
            <p style={{ fontSize: '1.33em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue.
            </p>
            <Button as='a' size='large'>Learn More</Button>
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
