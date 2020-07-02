import React, {Component} from 'react';
import Selector from './components/selector.js'
import Trivia from './components/trivia.js'

class App extends Component {
  
  constructor(){
    super()
      
    this.state={
        /* initial value:random year */
        year: Math.floor(Math.random() * 2000),
        trivia: ""
    }
  }
  
  fetching(number){
    /* with fragment avoid print the year */
    fetch(`http://numbersapi.com/${number}/year?fragment`)
    .then(response=>response.text())
    .then(data=>this.setState({trivia:data}))
    .catch(console.log(`error fetching`))
    console.log(`fetching`,this.state.year,this.state.trivia)
  }
  
  componentDidMount=()=>{
    this.fetching(this.state.year)    
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.year !== prevState.year)
      this.fetching(this.state.year);       
  }

  numberCath=(event)=>{
    console.log("event",event.target.value)
    if(event.target.value!==""){

      this.setState({year:event.target.value})
    }
    console.log(`state.year`, this.state.year)
    console.log(`state.trivia`, this.state.trivia)
  }
  
  render(){
    
    return (
      <div className="tc f2 lh-copy georgia bg-light-bluenpm "> 
        
        <Selector input={this.numberCath}/>
        <Trivia data={this.state}/>
      </div>
    );
  }
}

export default App;
