import React, { useState, useEffect } from 'react'

import { ProgressBar } from '../src'


export default {
  title: 'ProgressBar',
  component: ProgressBar,
}

/** -- props (ProgressBar):
 * [classes] - object, custom styling supported keys:
 *    root: progress bar main container div
 *    content: content / progress bar filler container div
 * [progress] - number, defines the percentage of the progress bar
 * [animate] - boolean, simple linear animation with css
 * [direction] - string, defines linear animation direction if [animate] is true:
 *    rtl - right to left
 *    ltr - left to right
 * [duration] - number, duration (in seconds) of the animation if [animate] is true
 * [...rest] - any div element properties
 */

let interval = undefined

export const Normal = () => {
  const [running, setRunning] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (running) {
      setProgress(0)
      interval = setInterval(() => {
        setProgress((prev) => prev + 1)
      }, 10)
    } else {
      clearInterval(interval)
    }
  }, [running])

  useEffect(() => {
    if (progress === 100) {
      setRunning(false)
      clearInterval(interval)
    }
  }, [progress])

  return (
    <>
      <ProgressBar progress={progress}/>
      <button onClick={() => setRunning(!running)}>run</button>
    </>
  )
}
