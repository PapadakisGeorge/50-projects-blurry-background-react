import React, {useState, useEffect} from 'react';
import LoadingText from './LoadingText/LoadingText';
import Background from './Background/Background';

const App = () => {
  const [load, setLoad] = useState(0);

  function scale (number, originalBounts, newBounts) {
    const [inMin, inMax] = [...originalBounts];
    const [outMin, outMax] = [...newBounts];

    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  };
   
  useEffect(() => {
    const interval = setInterval(() => {
      if(load < 100){
        setLoad(load + 1)
      }
    }, 30);

    console.log(load);
    return () => {
      clearInterval(interval)
   } 
  }, [load]); 

  return ( 
    <>
      <Background
        style={{filter: `blur(${scale(load, [0, 100], [30, 0])}px)`}}
      />
      <LoadingText
       load={load}
      />
    </>
    )
}

export default App;