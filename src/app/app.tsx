import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sheet from './Sheet'
import { Clock } from './Clock'

const Hello: React.FunctionComponent<{ compiler: string, framework: string }> = (props) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <Sheet />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);