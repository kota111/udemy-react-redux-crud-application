import React from 'react';

const App = ()=>{
  const profiles = [
    {name:"taro",age:335},
    {name:"tadro",age:33},
    {name:"tadsro",age:333},
    {name:"tadsro"},
    {age:333},
  ]
  return(
      <div>
        {
          profiles.map((profile,index)=>{
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
      </div>
  )
}
const User = (props) =>{
  return <div>{props.name} {props.age}</div>
}
User.defaultProps ={
  age:1,
  name:"nanashi",
}
export default App;