import React from 'react'
import { Link } from 'react-router-dom'
import style from 'styled-components'
import Links from './Links'
import {Flex} from './Style'

const Container = style.div`
    padding: 2rem;
    background: #C615B5;
    box-shadow: 0px 2px 2px 0px #C615B5;
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
      <Flex>
        
      <Link to={'/'}>
        <Logo>prog dalla dalla</Logo>
        </Link>
        <Links />
        </Flex>
    </Container>
        </>
  )
}
