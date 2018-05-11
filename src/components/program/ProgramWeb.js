import React, { Component } from 'react'

import Graph from 'react-graph-vis';

const graph = {
  nodes: [
    {id: 1, label: 'Architectural Design'},
    {id: 2, label: 'CAD 2D'},
    {id: 3, label: 'Chapter Team'},
    {id: 4, label: 'Coding'},
    {id: 5, label: 'Webmaster'},
    {id: 7, label: 'Biotechnology'},
    {id: 8, label: 'Children\'s Stories'},
    {id: 9, label: 'Essays on Technology'},
    {id: 10, label: 'Music Production'},
    {id: 12, label: 'Photographic'},
    {id: 14, label: 'Prepared Presentation'},
    {id: 15, label: 'SciVis'},
    {id: 17, label: 'Fashion Design'},
    {id: 18, label: 'Extemporaneous Speech'},
    {id: 20, label: 'Structural Engineering'},
    {id: 21, label: 'Engineering Design'},
    {id: 23, label: 'On Demand'},
    {id: 24, label: 'Digital Video'},
    {id: 25, label: 'Debating Technology Issues'},
    {id: 29, label: 'Dragster'},
    {id: 30, label: 'Computer Integrated Manufacturing'},
    {id: 31, label: 'Problem Solving'},
    {id: 33, label: 'Future Tech Teacher'},
    {id: 35, label: 'Transportation Systems'},
    {id: 36, label: 'CAD 3D'},
    {id: 38, label: 'Vex'},
    {id: 40, label: 'Video Game Design'},
    {id: 41, label: 'Software Development'},
    {id: 42, label: 'System Control'},
    {id: 43, label: 'Technology Bowl'},
    {id: 47, label: 'Promotional Graphics'},
    {id: 48, label: 'STEM Careers'},
    {id: 50, label: 'Scivis'},
    {id: 53, label: 'Flight'},
    {id: 55, label: '3D Animation'},
    {id: 0, label: 'Katie H'},
    {id: 6, label: 'Emily M'},
    {id: 11, label: 'Olivia M'},
    {id: 13, label: 'Alyssa M'},
    {id: 16, label: 'Colby L'},
    {id: 19, label: 'Jordan B'},
    {id: 22, label: 'Bella D'},
    {id: 26, label: 'Mackenzie H'},
    {id: 27, label: 'Camila K'},
    {id: 28, label: 'Ty W'},
    {id: 32, label: 'Holden S'},
    {id: 34, label: 'Jared H'},
    {id: 37, label: 'Chris M'},
    {id: 39, label: 'Connor M'},
    {id: 44, label: 'Connor C'},
    {id: 45, label: 'Ethan S'},
    {id: 46, label: 'Joseph G'},
    {id: 49, label: 'Jake H'},
    {id: 51, label: 'Kenny M'},
    {id: 52, label: 'Scott B'},
    {id: 54, label: 'Lucas M'},
    {id: 56, label: 'Angelo L'},
    {id: 57, label: 'Bremen C'},
    {id: 58, label: 'Darrian B'},
    {id: 59, label: 'Zak C'},
    {id: 60, label: 'Trevor C'},
    {id: 61, label: 'Matt S'},
    {id: 62, label: 'Adrian C'},
    {id: 63, label: 'Travis F'},
    {id: 64, label: 'Spencer W'},    

    //Advisors
    {id: 65, label: 'Mr. Long'},
    {id: 66, label: 'Mr. Richards'},
    {id: 67, label: 'Mr. Stedmen'},
    {id: 68, label: 'Mr. Shafer'},

    //Organizational Bodies
    {id: 69, label: 'Executive Committee'},
    {id: 70, label: '2017-2018 Officers'},
    {id: 71, label: 'Board of Directors'},
    {id: 72, label: 'Advisors'},
    {id: 73, label: '2018-2019 Officers'}
  ],
  edges: [
    {to: 1, from: 0, label: 'Member Of'},
    {to: 2, from: 0, label: 'Member Of'},
    {to: 4, from: 0, label: 'Member Of'},
    {to: 7, from: 6, label: 'Member Of'},
    {to: 1, from: 6, label: 'Member Of'},
    {to: 9, from: 6, label: 'Member Of'},
    {to: 10, from: 6, label: 'Member Of'},
    {to: 5, from: 6, label: 'Member Of'},
    {to: 1, from: 11, label: 'Member Of'},
    {to: 12, from: 11, label: 'Member Of'},
    {to: 10, from: 11, label: 'Member Of'},
    {to: 3, from: 13, label: 'Member Of'},
    {to: 8, from: 13, label: 'Member Of'},
    {to: 14, from: 13, label: 'Member Of'},
    {to: 8, from: 16, label: 'Member Of'},
    {to: 7, from: 16, label: 'Member Of'},
    {to: 18, from: 16, label: 'Member Of'},
    {to: 21, from: 19, label: 'Member Of'},
    {to: 1, from: 19, label: 'Member Of'},
    {to: 8, from: 22, label: 'Member Of'},
    {to: 20, from: 22, label: 'Member Of'},
    {to: 25, from: 22, label: 'Member Of'},
    {to: 8, from: 26, label: 'Member Of'},
    {to: 3, from: 26, label: 'Member Of'},
    {to: 17, from: 27, label: 'Member Of'},
    {to: 29, from: 28, label: 'Member Of'},
    {to: 30, from: 28, label: 'Member Of'},
    {to: 21, from: 28, label: 'Member Of'},
    {to: 31, from: 28, label: 'Member Of'},
    {to: 33, from: 32, label: 'Member Of'},
    {to: 15, from: 32, label: 'Member Of'},
    {to: 35, from: 34, label: 'Member Of'},
    {to: 21, from: 34, label: 'Member Of'},
    {to: 1, from: 34, label: 'Member Of'},
    {to: 36, from: 34, label: 'Member Of'},
    {to: 21, from: 37, label: 'Member Of'},
    {to: 2, from: 37, label: 'Member Of'},
    {to: 10, from: 37, label: 'Member Of'},
    {to: 5, from: 37, label: 'Member Of'},
    {to: 38, from: 37, label: 'Member Of'},
    {to: 40, from: 39, label: 'Member Of'},
    {to: 41, from: 39, label: 'Member Of'},
    {to: 42, from: 39, label: 'Member Of'},
    {to: 43, from: 39, label: 'Member Of'},
    {to: 4, from: 44, label: 'Member Of'},
    {to: 5, from: 44, label: 'Member Of'},
    {to: 5, from: 45, label: 'Member Of'},
    {to: 7, from: 45, label: 'Member Of'},
    {to: 41, from: 45, label: 'Member Of'},
    {to: 40, from: 45, label: 'Member Of'},
    {to: 3, from: 45, label: 'Member Of'},
    {to: 3, from: 46, label: 'Member Of'},
    {to: 47, from: 46, label: 'Member Of'},
    {to: 48, from: 46, label: 'Member Of'},
    {to: 7, from: 49, label: 'Member Of'},
    {to: 5, from: 49, label: 'Member Of'},
    {to: 50, from: 49, label: 'Member Of'},
    {to: 33, from: 49, label: 'Member Of'},
    {to: 36, from: 51, label: 'Member Of'},
    {to: 29, from: 51, label: 'Member Of'},
    {to: 7, from: 52, label: 'Member Of'},
    {to: 53, from: 52, label: 'Member Of'},
    {to: 43, from: 52, label: 'Member Of'},
    {to: 36, from: 52, label: 'Member Of'},
    {to: 15, from: 54, label: 'Member Of'},
    {to: 24, from: 54, label: 'Member Of'},
    {to: 23, from: 54, label: 'Member Of'},
    {to: 38, from: 57, label: 'Member Of'},
    {to: 38, from: 58, label: 'Member Of'},
    {to: 38, from: 59, label: 'Member Of'},
    {to: 24, from: 60, label: 'Member Of'},
    {to: 23, from: 60, label: 'Member Of'},
    {to: 55, from: 61, label: 'Member Of'},
    {to: 40, from: 61, label: 'Member Of'},
    {to: 15, from: 61, label: 'Member Of'},
    {to: 42, from: 62, label: 'Member Of'},
    {to: 38, from: 62, label: 'Member Of'},
    {to: 53, from: 63, label: 'Member Of'},
    {to: 21, from: 63, label: 'Member Of'},
    {to: 3, from: 64, label: 'Member Of'},
    {to: 17, from: 64, label: 'Member Of'},
    {to: 8, from: 64, label: 'Member Of'},

    //Team Leaders
    {to: 38, from: 56, label: 'Team Leader Of'},
    {to: 55, from: 54, label: 'Team Leader Of'},
    {to: 30, from: 52, label: 'Team Leader Of'},
    {to: 43, from: 46, label: 'Team Leader Of'},
    {to: 42, from: 44, label: 'Team Leader Of'},
    {to: 41, from: 44, label: 'Team Leader Of'},
    {to: 40, from: 44, label: 'Team Leader Of'},
    {to: 4, from: 39, label: 'Team Leader Of'},
    {to: 1, from: 37, label: 'Team Leader Of'},
    {to: 10, from: 34, label: 'Team Leader Of'},
    {to: 31, from: 32, label: 'Team Leader Of'},
    {to: 7, from: 34, label: 'Team Leader Of'},
    {to: 21, from: 32, label: 'Team Leader Of'},
    {to: 25, from: 26, label: 'Team Leader Of'},
    {to: 23, from: 22, label: 'Team Leader Of'},
    {to: 24, from: 22, label: 'Team Leader Of'},
    {to: 20, from: 19, label: 'Team Leader Of'},
    {to: 17, from: 16, label: 'Team Leader Of'},
    {to: 15, from: 13, label: 'Team Leader Of'},
    {to: 8, from: 6, label: 'Team Leader Of'},
    {to: 5, from: 0, label: 'Team Leader Of'},
    {to: 3, from: 0, label: 'Team Leader Of'},


    //2017 Officer Roles
    {to: 0, from: 70, label: 'Treasurer'},
    {to: 6, from: 70, label: 'Sergant at Arms'},
    {to: 28, from: 70, label: 'President'},
    {to: 32, from: 70, label: 'Vice President'},
    {to: 34, from: 70, label: 'Secretary'},
    {to: 37, from: 70, label: 'Reporter'},

    //2018 Officer Roles
    {to: 46, from: 73, label: 'Treasurer'},
    {to: 45, from: 73, label: 'Sergant at Arms'},
    {to: 0, from: 73, label: 'President'},
    {to: 11, from: 73, label: 'Vice President'},
    {to: 49, from: 73, label: 'Secretary'},
    {to: 26, from: 73, label: 'Reporter'},

    //Advisors
    {to: 65, from: 72},
    {to: 66, from: 72},
    {to: 67, from: 72},
    {to: 68, from: 72},

    //Executive Committee
    {to: 11, from: 69},
    {to: 19, from: 69},
    {to: 39, from: 69},
    {to: 13, from: 69},
    {to: 52, from: 69},
    {to: 45, from: 69},

    //Join Bodies
    {to: 69, from: 71},
    {to: 70, from: 71},
    {to: 72, from: 71},

  ]
};

var options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000",
        chosen: false,
        length: 250
    },
    nodes: {
      chosen: false
    },
    interaction: {
      zoomView: false
    }
};

const containerStyles = {
  width: '100%',
  height: '64vh',
  border: '5px solid #ccc',
  borderRadius: '16px',
  boxShadow: 'inset 0px 0px 20px 10px rgba(0,0,0,0.2)'
}


export default class ProgramWeb extends Component {
  constructor(props) {
    super(props);
    this.state = this.updateGraph(37)
  }



  updateGraph(centerNode) {
    var fromEdges = graph.edges.filter(edge => edge.from === centerNode)
    var toEdges = graph.edges.filter(edge => edge.to === centerNode)
    var fromNodes = fromEdges.map(edge => graph.nodes.filter(node => node.id === edge.to)[0])
    var toNodes = toEdges.map(edge => graph.nodes.filter(node => node.id === edge.from)[0])
    return {
          graph: {
            nodes: fromNodes.concat(toNodes, graph.nodes.filter(node => node.id === centerNode)),
            edges: fromEdges.concat(toEdges)
          },
          centerNode: centerNode
        }
  }


  render() {
    var events = {
        click: function(event) {
          var nodes = event.nodes;
          if(nodes.length > 0 && nodes[0] !== this.state.centerNode) {
            this.setState(this.updateGraph(nodes[0]))
          }
        }.bind(this)
    }

    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Graph graph={this.state.graph} options={options} events={events} />
      </div>
    );
  }
}
