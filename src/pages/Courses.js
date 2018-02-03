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
  Rail,
  Sticky,
  Menu,
  Item
} from 'semantic-ui-react'

import ScrollableAnchor from 'react-scrollable-anchor'


import intro from '../assets/courses.JPG'

const advisors = [
  {
    childKey: 0,
    image: '',
    header: 'Ben Long',
    description: 'Description',
    meta: 'longb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2050',
  },
  {
    childKey: 1,
    image: '',
    header: 'Bryan Richards',
    description: 'Description',
    meta: 'richardsb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2010',
  },
  {
    childKey: 2,
    image: '',
    header: 'Bryon Stedman',
    description: 'Description',
    meta: 'stedmanb@manateeschools.net',
    extra: '(941) 727-6100 ext. 2153',
  },
  {
    childKey: 3,
    image: '',
    header: 'Daniel Shafer',
    description: 'Description',
    meta: 'shaferd@manateeschools.net',
    extra: '(941) 727-6100 ext. 2026',
  },
]


export default class Courses extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })


  render() {
    const { contextRef } = this.state
    return (
      <div>
        <PageHeading title="Career and Technical Education" subtitle="Excelling in STEM" image={intro} />          
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
          <Grid centered columns={3}>
            <Grid.Column width={16}>
              <div ref={this.handleContextRef}>
                <Rail internal position='left'>
                  <Sticky context={contextRef}>
                    <Menu pointing secondary vertical style={{ marginTop: '55px' }}>
                      <Menu.Item as='a' href='#agriculture' name='Agriculture, Food & Natural Resources' />
                      <Menu.Item as='a' href='#av' name='Arts, AV Technology & Communication' />
                      <Menu.Item as='a' href='#education' name='Education & Training' />
                      <Menu.Item as='a' href='#engineering' name='Engineering & Technology Education' />
                      <Menu.Item as='a' href='#it' name='Information Technology' />
                    </Menu>
                  </Sticky>
                </Rail>
                <Container>
                <ScrollableAnchor id={'agriculture'}>
                  <div>
                    <Header size='huge'>Agriculture, Food & Natural Resources</Header>
                    <ClassExert
                      title="AGRISCIENCE FOUNDATIONS 1"
                      text="This science course is designed to develop competencies in the areas of agricultural history and the global impact of agriculture; career opportunities; scientific and research concepts; biological and physical science principles; environmental principles; agriscience safety; principles of leadership; and agribusiness, employability, and human relations skills in agriscience. Laboratory-based activities are an integral part of this course. This course is a prerequisite for all other agricultural courses unless otherwise stated."
                    />          
                    <ClassExert
                      title="AGRITECHNOLOGY 1"
                      text="Content includes but is not limited to: agriscience careers, prevention and treatment of animal diseases; livestock anatomy, wholesale cuts of meat; animal reproduction; animal safety; plant production; maintenance of tools and equipment; agricultural mechanics; record keeping and employability skills. Indoor and outdoor activities and instruction are a part of this course. A $10 lab fee will be requested."
                    />
                    <ClassExert
                      title="AGRITECHNOLOGY 2"
                      text="This course is designed to expand upon the Agritechnology curriculum with an advanced focus on animal production procedures; irrigation practices; plant fertilization; pest management; agricultural construction and engineering and agribusiness. Instruction will take place both inside the classroom and in the outside land lab. A $10 lab fee will be requested."
                    />
                    <ClassExert
                      title="INTRODUCTORY HORTICULTURE 2"
                      text="This elective course and practical art course is designed to develop competencies in the areas of career opportunities; global importance of agriculture; plant classification; propagation; growing media; nutritional needs; fertilization; irrigation; pest identification; pest control."
                    />
                    <ClassExert
                      title="HORTICULTURE SCIENCE 3"
                      text="This elective course and practical art course is designed to develop competencies in the areas of industry regulations; plant classification; plant transportation; soil sampling and analysis; fertilizer calculations; recording keeping; irrigation components, water quality; drainage; integrated pest management; pesticide safety and regulations; equipment calibration; chemical growth regulators; xeriscaping; integrated landscape management; safe use of power equipment; record keeping; and employability skills. Students will work toward and take the FNGLA Horticulture Professional (FCHP) Certification."
                    />
                    <ClassExert
                      title="HORTICULTURE SCIENCE AND SERVICES 4"
                      text="This course is designed to further develop competencies in the areas of plant identification and classification; growing media; irrigation system set up; and maintaining and analyzing records including production costs."
                    />
                    <ClassExert
                      title="ANIMAL SCIENCE & SERVICES 2"
                      text="This course is designed to develop competencies in the areas of safety, animal behavior, animal welfare, animal control, and employability skills. Instruction will take place both inside the classroom and outdoor labs. A $10 lab fee will be requested."
                    />
                    <ClassExert
                      title="ANIMAL SCIENCE & SERVICES 3"
                      text="This course is designed to develop competencies in the areas of animal digestive systems, animal breeding, preventative medicine and disease control; animal marketing and analyzing records. Instruction will take place both inside the classroom and outdoor labs. A $10 lab fee will be requested."
                    />
                    <ClassExert
                      title="ANIMAL SCIENCE & SERVICES 4"
                      text="Description: This course is designed to develop competencies in the areas of nutrition; grooming, exhibiting and marketing animals; operation, maintenance and repair of animal facilities. The Animal Science Industry Certification will be offered in this course."
                    />
                    <ClassExert
                      title="AGRICULTURE, FOOD AND NATURAL RESOURCES COOPERATIVE EDUCATION – OJT"
                      text="Provides on-the-job training in an agriculturally related area. Student must obtain a job by the end of the second week of school. Students must work 7.5 hours for each class period assigned to OJT. The student may not work for a family member and compensation must be paid to the student. Quarterly observations are required by the supervising teacher."
                    />
                    <ClassExert
                      title="AGRICULTURE, FOOD AND NATURAL RESOURCES DIRECTED STUDY"
                      text="The content of this course is prescribed by the instructor based upon the individual’s assessed needs for directed study. A student may earn multiple credits in this course. The selected standards; which the student must master to earn credit, must be outlined in an instructional plan developed by the student, teacher, and parents."
                    />
                  </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'av'}>
                  <div>
                   <Header size='huge'>Arts, AV Technology & Communication</Header>
                    <ClassExert
                      title="TELEVISION PRODUCTION 1"
                      text="Level 1 TV Production is designed for the novice or beginning Visual Communications student. Students will learn basic studio operations, HD camera skills, script writing basics, as well as Premiere Pro editing techniques. Learning the industry terminology, studio jargon, and editing principles are essential for success in this class."
                    />
                    <ClassExert
                      title="TELEVISION PRODUCTION 2"
                      text="Level 2 TV Production students will continue to master skills using Premiere Pro. Students MUST pass the Premiere Pro Industry Certification Test to move into the next class. Students will produce a variety of video projects designed to enhance their skill set with non-linear editing and HD video camera operation. This includes original script productions, videography, with final edits and exports. Students will also prepare for taking over a variety of rolls on the Lakewood Live News Crew."
                    />
                    <ClassExert
                      title="TELEVISION PRODUCTION 3/4"
                      text="Advanced TV Production (Level 3-4) students are responsible for producing the daily LIVE news program 'Lakewood Live'. Students may serve as talent or crew on the show (auditions required for talent) and also rotate into production cycles to create seasonal news show elements and commercials for LRHS events. Students also have the option of working with the Bright House Sports Network (BHSN) to create ENG packages and articles for their website. Advanced knowledge of Premiere Pro editing software is essential as we will build on those skills. plus, a working knowledge of HD video cameras, shot composition skills, and script writing techniques."
                    />
                  </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'education'}>
                  <div>
                   <Header size='huge'>Education Training</Header>
                    <ClassExert
                      title="EARLY CHILDHOOD EDUCATION 1"
                      text="This course is the first in a series of four preparing students to work with young children. Students begin their certification process through the Florida Department of Children and Families (DCF) while studying child growth and development; health safety and nutrition; child abuse and neglect; and the rules and regulations for Florida. Students will also receive Infant and Child CPR/First Aid training and certification. Students will be introduced to our Mini Mustang VPK class as they help in the preschool setting. There is a fee for testing costs."
                    />
                    <ClassExert
                      title="EARLY CHILDHOOD EDUCATION 2"
                      text="This course prepares students to work as preschool teachers in our VPK program with 4 year olds. Students will continue their DCF certification as they observe children, study guidance techniques and lesson preparation in various areas for preschoolers. Students will experience hands-on learning by teaching small groups in the preschool. There is a fee for testing costs."
                    />
                    <ClassExert
                      title="EARLY CHILDHOOD EDUCATION 3"
                      text="This course allows students to work as teacher aide interns in off-campus settings. This will include local elementary schools and child care centers. Students must provide their own transportation to these locations. The final DCF certifications will be completed as well as recertification of Infant/Child First Aid and CPR. The hours worked with children will be applied toward the Child Development Associate National Credential (CDA). There is a fee for testing costs."
                    />
                    <ClassExert
                      title="EARLY CHILDHOOD EDUCATION 4"
                      text="This course allows students to work as teachers in our VPK classroom emphasizing STEAM lessons. The students will complete the Child Development Associates National Credential (CDA). Students may also earn articulation credit through the State College of Florida (3 to 9 hours)."
                    />
                  </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'engineering'}>
                 <div>
                 <Header size='huge'>Engineering Technology Education</Header>
                  <ClassExert
                      title="APPLIED ENGINEERING TECHNOLOGY 1"
                      text="Applied Engineering Technology 1 is a course in which students use their artistic and creative abilities to design products and structures with the use of computers and a variety of software to broaden their design skills. Course activities include developing drawings of products, structures, and systems. Students will investigate how individuals use the technological systems of transportation, communication, design, manufacturing and construction to address societal needs. Through hands-on activities students will use laser engravers, rapid prototyping and 3D modeling to design/engineer solutions to identified problems and use a variety of tools and equipment to produce and assess different products and structures. Students will be able to select a certain product and prepare dimensioned drawings and related documents."
                    />
                    <ClassExert
                      title="APPLIED ENGINEERING TECHNOLOGY 2"
                      text="Applied Engineering Technology 2 is a continuation of Applied Engineering Technology 1. Students will continue to solve problems using the Engineering Design Process. Students will apply the knowledge learned from Applied Engineering 1 to complete more advanced projects, such as Co2 cars, construction of individual designs, and hydraulic and pneumatic projects. Students will learn the safety of more advanced tools. Such as table saw, compound miter saw, and mill. Students will also have the opportunity to begin the Manufacturing Skills Standards Council Industry Certification (15 college credits)."
                    />
                    <ClassExert
                      title="APPLIED ENGINEERING TECHNOLOGY 3"
                      text="Applied Engineering Technology 3 is a continuation of Applied Engineering Technology 2. Students will continue to solve problems using the Engineering Design Process. Students will apply the knowledge learned from Applied Engineering 1 and 2 to complete more advanced projects. Students will work in groups and individually on larger scale projects and solutions to problems. Students will learn how to weld and complete metal design projects. Students will also have the opportunity to complete the Manufacturing Skills Standards Council Industry Certification (15 college credits)."
                    />
                    <ClassExert
                      title="FOUNDATIONS OF ROBOTICS"
                      text="Foundations of Robotics is an introductory course to the fascinating world of robotics. This course will introduce fundamental robotic topics. Such as robot design, construction, and programming. Students will use skills learned in other engineering courses to design robots to solve problems. Some solutions will be autonomous and others will require human interaction. Students will follow the engineering design process and create 3D models of their robotic solutions."
                    />
                    <ClassExert
                      title="ROBOTIC DESIGN ESSENTIALS"
                      text="Robotic Design Essentials is the second course in the applied robotics program. This course will continue to develop skills needed to design and create functioning robots that solve problem. This course will also give students the opportunity to take the Pre Engineering and Robotics Industry Certifications. Robotic Design Essentials will also introduce students into the amazing world of competitive robotics. (Vex VRC)."
                    />
                    <ClassExert
                      title="TECHNICAL DESIGN 1"
                      text="Technical Design 1 will expand on the design aspect of Applied Engineering 1 in great detail. It will concentrate on architecture design and engineering concepts related to architecture. Students will learn to design and draft buildings, plot plans, and landscapes both by hand and in CAD software. Students will also design and build a scaled model of a building and plot plan using tools and the laser."
                    />
                    <ClassExert
                      title="PRODUCTION TECHNOLOGY 1"
                      text="Production Technology 1 will expand on the production and manufacturing aspect of Applied Engineering 1. Students will learn how products are made and mass produced, the different types of manufacturing, and CNC concepts. Students will model concepts in 3D modeling software (Solidworks) and then use a post processor (CamWorks) to allow a computer numerical controlled mill or lathe to produce their design. Students will set up a small company and create a product. The students will design, manufacture, package, and market a product."
                    />
                    <ClassExert
                      title="ADVANCED TECHNOLOGY APPLICATIONS"
                      text="Advanced Technology Applications is for the advanced engineering student who wants to independently follow the engineering design process to solve problems and create products. Students will apply skills from all of the engineering classes offered at Lakewood Ranch. This course will allow students the freedom to design, create, and produce and endless possibility of solutions and products. Students will also have the chance to take multiple industry certifications."
                    />
                  </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'it'}>
                  <div>
                    <Header size='huge'>Information Technology</Header>
                    <ClassExert
                      title="DIGITAL INFORMATION TECHNOLOGY"
                      text="This course is designed to provide a basic overview of current business and information systems and trends, and to introduce students to fundamental skills required for today's business and academic environments. Emphasis is placed on developing fundamental computer skills. The intention of this course is to prepare students to be successful both personally and professionally in an information based society. Digital Information Technology includes the exploration and use of: databases, the internet, spreadsheets, presentation applications, management of personal information and email, word processing and document manipulation, HTML, web page design, and the integration of these programs using software that meets industry standards."
                    />
                    <ClassExert
                      title="FOUNDATIONS OF WEB DESIGN"
                      text="This course is designed to provide students with opportunities to acquire and apply foundational skills related to web design using the Adobe Dreamweaver and Photoshop software programs. USER INTERFACE DESIGN (9001120) GRADE LEVEL: 10-12 CREDIT: 1.0 PREREQUISITE: B OR HIGHER IN FOUNDATIONS OF WEB DESIGN & TEACHER APPROVAL. This course provides advanced concepts used in interface design. The content includes principles of Human Computer Interface (HCI), advanced page design using Cascading Style Sheets (CSS), advanced HTML commands, multimedia applications, Internet/Intranet tools, and website promotion."
                    />
                    <ClassExert
                      title="MEDIA INTEGRATION ESSENTIALS"
                      text="This class is the capstone of the web design program; web designers must have an understanding of software functionality, graphic design skills, client communication, and marketing as well as time management to create successful Web pages. Through various software programs, students will create interactive products that are usable for a memorable experience and a professional portfolio. Students will demonstrate techniques for integrating various forms of media on webpages with attention for consumer “usability” (website navigation, efficiency, memorability), along with their skills in Dreamweaver, Photoshop, Flash, and Premier Pro, and will focus on XML and AJAX technologies and frameworks, and Java Scripting."
                    />
                    <ClassExert
                      title="GAME AND SIMULATION FOUNDATIONS"
                      text="This course is designed to provide an introduction to game and simulation concepts and basic game/simulation design concepts. We will cover strategies, processes, and methods for conceptualizing a game or simulation application; storyboarding techniques; and development tools. Hands-on activities using professional software game development tools such as Toon Boom’s Flip Boom and Storyboard, and digital graphic software such as Photoshop. Studio includes stop-motion animation, making it the perfect animation software students to discover and create in all techniques with ease for spectacular results."
                    />
                    <ClassExert
                      title="GAME AND SIMULATION DESIGN"
                      text="Through the use of sound and animation, design tools, and implementation issues, this course helps you take an idea and translate it into a visual story that will become a complete production. Deliver rich looking products instantly and effortlessly to everyone. Emphasis is placed on the techniques needed to develop well-documented, structured game or simulation programs. Extensive use is made of evaluating and analyzing existing games or simulations."
                    />
                    <ClassExert
                      title="GAME AND SIMULATION 2D GRAPHIC DEVELOPMENT"
                      text="Through the use of hands-on activities using professional software game development tools students will focus on how to combine multiple animation software packages and Photoshop techniques, to create, refine, and integrate realistic 2D graphics into a game or simulation product. Students will learn how to use automated lip sync to fine-tune voice tracks and to share work just as easily with numerous export options, including effortless uploads to YouTube and Facebook."
                    />
                  </div>
                </ScrollableAnchor>
                </Container>
              </div>
            </Grid.Column>
          </Grid>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Our Advisors</a>
          </Divider>
          <Grid centered columns={3}>
            <Grid.Column width={10}>
             <Item.Group items={advisors} />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}
