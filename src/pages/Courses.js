import React, { Component } from 'react'
import PageHeading from '../components/PageHeading'
import NewsExert from '../components/homepage/NewsExert'
import ClassExert from '../components/courses/ClassExert'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'


export default class Courses extends Component {
  render() {
    return (
      <div>
        <PageHeading title="Career and Technical Education" subtitle="Exceling in STEM" />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <NewsExert
            header="Teaching the Next Generation"
            exert="Several CTE courses are offered at this school, falling under a wide variety of topics. Students can choose different paths of CTE courses to follow, and even take multiple if they choose. For example, in the Engineering and Technology Education path, students can take engineering classes that will provide prerequisites for robotics or technical design classes. Information Technology classes can lead to web and game design classes. Agritechnology and Video Production paths are also available. From agribusiness to TV production, the numerous CTE class offered have something for everyone. Beyond standard classes, this school also offers on-the-job CTE training classes for upperclassmen. These classes are intended to help students prepare for jobs later in life, specifically CTE and other technology related jobs."
          />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Courses Offered</a>
          </Divider>
          <ClassExert
            title="Foundation of Robotics"
            text="Foundation of Robotics is an introductory course to the fascinating world of robotics. This course will introduce fundamental robotic topics. Students will use skills learned in other engineering courses to design robots to solve problems. Some solutions will be autonomous and others will require human interaction. Students will follow the engineering design process and create 3D models of their robotic solutions."
            imageLink="/assets/images/robotics.png"
          />
          <ClassExert
            title="Applied Engineering"
            text="Engineering is problem-solving In Applied Engineering Technology, students learn how to solve problems through many different hands-on and computer based activities. Students will learn the Engineering Design Process, 3D Modeling. Students will have the opportunity to take the Certified Solidworks Associate Industry Certification. Projects include laser engraving, crash test cars, 3D printing, and trebuchets."
            imageLink="/assets/images/applied.png"
          />
          <ClassExert
            title="Technical Design"
            text="Technical Design 1 will expand on the design aspect of Applied Engineering 1 in great detail. It will concentrate on architecture design and engineering concepts related to architecture. Students will learn to design and draft buildings, plot plans, and landscapes both by hand and in CAD software. Students will also design and build a scaled model of a building and plot plan using tools and the laser."
            imageLink="/assets/images/drafting.png"
          />
          <ClassExert
            title="Production Technology"
            text="Students will learn how products are made and mass produced, the different types of manufacturing, and CNC concepts. Students will model concepts in 3D modeling software (Solidworks) and then use a post processor (CamWorks) to allow a computer numerical controlled mill or lathe to produce their design. Students will set up a small company and create a product. The students will design, manufacture, package, and market a product."
            imageLink="/assets/images/production.png"
          />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Our Advisors</a>
          </Divider>
        </Segment>
      </div>
    )
  }
}
