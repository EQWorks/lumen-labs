import React, { useState, useEffect } from 'react'

import { ProgressBar } from '../src'


export default {
  title: 'ProgressBar',
  component: ProgressBar,
}
let interval = undefined
export const Normal = () => {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      console.log('interval: ', interval);
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <>
    <ProgressBar percentage={progress}/>
    <button onClick={() => setRunning(!running)}>run</button>
    </>
  )
}
