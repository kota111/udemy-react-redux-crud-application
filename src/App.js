import React,{Component} from 'react';

class App extends Component{
  render(){
    return <input type="text" onChange={()=>{console.log("i'm clicked")}}/>
  }
}
export default App;