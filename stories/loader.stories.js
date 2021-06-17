import React from 'react'

import { Loader } from '../src'


export default {
  title: 'Loader',
  component: Loader,
}

/** -- props:
 * [classes] - object, custom styling supported keys:
 *    icon: classes applied to icon svg
 *    message: classes applied to message beside icon
 * [backdrop] - boolean, renders loader as backdrop
 * [open] - boolean, control loader open/close
 * [message] - string, descriptive text beside icon if [backdrop] is true
 * [Icon] - node, any svg icon
 */

export const Backdrop = () => {
  return (<Loader open backdrop message='Loading...' />)
}
