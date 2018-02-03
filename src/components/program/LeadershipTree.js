import React from "react";
import Tree from "react-d3-tree";

const data = [
  {
    name: "Advisor",
    children: [
      {
        name: "President",
        children: [
            {
                name: 'Vice President',
                children: [
                    {
                        name: 'Large Displays'
                    }
                ]
            },
            {
                name: 'Secretary',
                children: [
                    {
                        name: 'Presentation 1'
                    }
                ]
            },
            {
                name: 'Treasurer',
                children: [
                    {
                        name: 'Presentation 2'
                    }
                ]
            },
            {
                name: 'Reporter',
                children: [
                    {
                        name: 'Digital'
                    }
                ]
            },
            {
                name: 'Seargeant at Arms',
                children: [
                    {
                        name: 'Misc.'
                    }
                ]
            },
            {
                name: 'Executive Committee',
                children: [
                    {
                        name: 'CAD/CAM'
                    },
                    {
                        name: 'Graphics'
                    },
                    {
                        name: 'Audio/Visual'
                    },
                ]
            }       
        ]
      }
    ]
  }
];

const containerStyles = {
  width: '100%',
  height: '60vh',
}

export default class LeadershipTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: 20
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={data} 
          translate={this.state.translate} 
          orientation={'vertical'}
          zoomable={false}
          separation={{siblings: 1, nonSiblings: 1}}
        />
      </div>
    );
  }
}
