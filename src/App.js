import React from 'react';
import PropTypes from 'prop-types';

const App = ()=>{
  const profiles = [
    {name:"taro",age:335},
    {name:"tadro",age:33},
    {name:22,age:"ii"},
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

User.propsTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
}
export default App;