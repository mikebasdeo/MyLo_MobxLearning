import * as React from 'react';
import * as ReactDOM from 'react-dom';
// class import
import Sheet from './Sheet'
import EventForm from './Event'
// functional import
import { Clock } from './Clock'

// functional typescript component
const License: React.FunctionComponent<{licenseToKill: boolean}> = (props) => {
  if (props.licenseToKill) {
    return(
      <div>
        Access Granted
      </div>
    )
  }
  return (
    <div>
      Access Denied
    </div>
  )
}

// practice functional typescript component
const Person: React.FunctionComponent<{ name: string, isSpy: boolean, age: number}> = (props) => {
  if (props.isSpy) {
  return (
    <div>
      Welcome {props.name} <br/>
      You are a spy
      {props.children}
    </div>
    )
  }
  return (
    <div>
      Welcome {props.name} <br/>
      You are not a spy
      {props.children}
    </div>
  )
}

// main method
ReactDOM.render(
  <div>
    {/* <Clock/>
    <Person name='James Bond' isSpy={true} age={55}>
      <License licenseToKill={true}/>
    </Person>

    <Person name='Q' isSpy={false} age={55}>
      <License licenseToKill={false}/>
    </Person> */}
    <EventForm/>
  </div>
  ,
  document.getElementById("root")
);