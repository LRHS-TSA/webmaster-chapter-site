import React, { Component } from 'react'

import {
  Card,
  Container,
  Button
} from 'semantic-ui-react'

import Update from '../components/news/Update'
import PageHeading from '../components/PageHeading'


import newOfficers from '../assets/updates/JPEG/newofficers.jpg'
import banquet from '../assets/updates/JPEG/banquet.jpg'
import officerElections from '../assets/updates/JPEG/officerelections.jpg'
import states from '../assets/updates/JPEG/states.jpg'
import tostates from '../assets/updates/JPEG/tostates.jpg'
import districts from '../assets/updates/JPEG/districts.jpg'
import leadership from '../assets/updates/leadership.jpg'
import ctso from '../assets/updates/JPEG/ctso.jpg'
import firstMeeting from '../assets/updates/JPEG/firstmeeting.jpg'
import freshmenOrientation from '../assets/updates/freshmen.jpg'


import cover from '../assets/updates/cover.jpg'

import report from '../assets/States.pdf'



export default class Home extends Component {
  render() {
    return (
        <div>
            <PageHeading title="News and Noteworthy" image={cover} />
            <Container>
              <Card.Group itemsPerRow={window.innerWidth < 480 ? 1 : 2}>
                <Update image={newOfficers} header="Congratulations to the 2018-2019 LRHS TSA officer team!" date="5/2/18">
                  President: Katie Hartley<br />
                  Vice President: Olivia Miller<br />
                  Secretary: Jake Hanson<br />
                  Treasurer: Joseph Giannone<br />
                  Reporter: Mackenzie Hopkins<br />
                  Sergeant-at-Arms: Ethan Spasciani<br />
                </Update>

                <Update image={banquet} header="The 2017-2018 LRHS TSA Banquet" date="5/2/18">
                  Parents and members attended the banquet today to recognize the hard work all the members have put in. The president gave his farewell speech and the head advisor recognized the seniors on the hard work as a farewell. 
                </Update>     

                <Update image={officerElections} header="2018-2019 Officer Elections" date="4/18/18">
                 Officer elections for the secretary, treasurer, reporter, and sergeant-at-arms positions were today. The results will be announced at the banquet on the 2nd.                
                </Update>       

                <Update image={states} header="2018 State Conference Results" date="3/3/18">
                  At the conference, LRHS TSA placed 2nd overall and placed in the top three for events 15 times. More information can be found in the 2018 State Conference Report Card.
                  <Button as='a' fluid target="_blank" href={report} content='Conference Report Card' primary />
                </Update>

                <Update image={tostates} header="Off to the 2018 Florida TSA State Conference" date="2/28/18">
                  The state team left for the Florida TSA State Conference ready to compete in 33 events.
                </Update> 

                <Update image={districts} header="A Successful Day at the Manatee County TSA District Conference" date="12/2/17">
                  Those competing in events at the district level headed to Braden River High School today. Overall LRHS placed in the top three 9 times.
                </Update> 
                
                <Update image={leadership} header="The Board of Directors leaves for the Florida TSA Leadership Conference" date="10/18/17">
                  The executive committee joined the officers at the TSA Leadership conference. They competed in games with students from across the state and attended leadership breakout sessions.
                </Update>

                <Update image={ctso} header="Manatee County CTSO Rally" date="9/25/17">
                  The LRHS TSA attended the annual CTSO rally along with other career and technical student organizations in manatee county where the members listened to a motivational speaker and competed for the spirit stick.
                </Update>

                <Update image={firstMeeting} header="First 2017-2018 LRHSTSA Meeting" date="8/21/17">
                  The officers had a great time seeing the returning members and meeting new ones. The next meeting will be on the 28th.
                </Update>

                <Update image={freshmenOrientation} header="LRHS Freshmen Orientation" date="8/8/17">
                  Today was the LRHS freshmen orientation. The officers got to meet incoming freshmen and tell them about the technology program. We hope to see them at the first meeting on the 21st.
                </Update>
              </Card.Group>
            </Container>
        </div>
    )
  }
}