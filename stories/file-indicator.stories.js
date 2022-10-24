import React, { useState, useEffect } from 'react'

import { FileIndicator } from '../src'


export default {
  title: 'File Indicator',
  component: FileIndicator,
}

/** -- props (FileIndicator):
 * [classes] - object, custom styling supported keys:
 *    root: file indicator main container div
 *    content: content / file indicator filler container div
 * [progress] - number, defines the percentage of the file indicator
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

  const pauseDownload = () => setRunning(!running)

  return (
    <>
      <FileIndicator progress={progress} pause={pauseDownload}/>
      <button onClick={() => setRunning(!running)} >run</button>
    </>
  )
}

export const File = () => {
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

  const pauseDownload = () => setRunning(!running)

  return (
    <>
      <FileIndicator progress={progress} fileName={'Loader Name.filetype'} fileSize={'239 bytes'} pause={pauseDownload}/>
      <button onClick={() => setRunning(!running)}>run</button>
    </>
  )
}

export const Time = () => {
  const [running, setRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [time, setTime] = useState(100)

  useEffect(() => {
    if (running) {
      setTime(100)
      setProgress(0)
      interval = setInterval(() => {
        setProgress((prev) => prev + 1)
        setTime((prev) => prev - 1)
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

  const pauseDownload = () => setRunning(!running)

  return (
    <>
      <FileIndicator progress={progress} time={time} pause={pauseDownload}/>
      <button onClick={() => setRunning(!running)}>run</button>
    </>
  )
}

export const Error = () => (
  <>
    <FileIndicator progress={0} error={true} />
  </>
)
