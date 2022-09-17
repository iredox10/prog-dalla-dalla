import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import style from 'styled-components'
import Topics from '../components/Topics'

  
  export default function Home() {
  return (
    <>
    <Header />
    <Topics />
    <Blogs />  
    </>
  )
}
