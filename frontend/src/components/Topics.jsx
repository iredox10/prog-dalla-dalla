import React from 'react'
import style from 'styled-components'
import { Button } from './Style'
const Topic = style.div`
    padding: .5rem;
    background: blue;
    display:flex;
`


export default function Topics() {
  return (
    <Topic>
      <Button>html</Button>
      <Button>javasctript</Button>
      <Button>css</Button>
      <Button>tips da tricks</Button>
      <Button>computer science</Button>
    </Topic>
  )
}
