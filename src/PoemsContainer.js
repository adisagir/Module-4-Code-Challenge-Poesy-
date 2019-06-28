import React from 'react';
import Poem from './Poem';

// a very very sad attempt

class PoemsContainer extends React.Component {
  state = {
      poems: []
    }

  componentDidMount() {
    const api = "http://localhost:3000/poems"

    fetch(api)
    .then(res => res.json())
    .then(data => {
      this.setState({poems: data})
    })
  }

  handleSubmit = () => {
   
  }

  render() {
    const {poems} = this.state
    const poemsMap = poems.map(poemData => {
      return <PoemsContainer key={poemData.id} poem={poemData} />
    })
    
    return (
      <div className="poems-container">
        <Poem poems={this.state.poems} handleSubmit={this.handleSubmit} />
        {poemsMap}
      </div>
    ); 
  }
}

export default PoemsContainer;