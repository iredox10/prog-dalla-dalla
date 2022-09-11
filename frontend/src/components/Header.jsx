import React from 'react'
import { Link } from 'react-router-dom'
import style from 'styled-components'
import Links from './Links'

const Container = style.div`
    padding: 2rem;
    background: blue;
`

const Logo = style.h1`
    font-weight: bold;
    color: white;
    text-decoration: none;
`
const List = style.ul`
    list-style: none;
    display: flex;
`

const Li = style.li`
    
`

export default function Header() {
  return (
    <>
    <Container>
      <Link to={'/'}>
        <Logo>prog dalla dalla</Logo>
        </Link>
    </Container>
        <Links />
        </>
  )
}
