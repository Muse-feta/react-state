import State from './ClassStateExample/State'
import PropsTaker from "./ClassStateExample/PropsTaker";
import SecondPropsTaker from './ClassStateExample/SecondPropsTaker'
import Counter from './ClassStateExample/Counter'
import ComponentWillMountandDidMount from './ClassStateExample/ComponentWillMountandDidMount'
import ComponentDiDUpdate from './ClassStateExample/ComponentDiDUpdate'


import UseState from "./FunctionHooksExample/UseState";
import UseEffect from './FunctionHooksExample/UseEffect'
import React , {useContext} from 'react';

export let myContext = useContext();

function App() {


  return (
    <>
      {/* class based examples */}

      {/* <State />
      <PropsTaker name="Evangadi" />
      <SecondPropsTaker sstatus="scholarship" />
      <Counter />
      <ComponentWillMountandDidMount />
      <ComponentDiDUpdate /> */}

      {/* function hooks example */}

      {/* <UseState />   useState method used to use state in function based componenet named by hooks*/}
      <UseEffect />
    </>
  );
};

export default App
