import { useState } from 'react'
import {useParams } from 'react-router-dom'
import styledComponents from 'styled-components'
import Header from '../components/Header'

import { Flex, Wrapper, Text, Button } from '../components/Style'
import usefetch from '../hooks/useFetch'

const Container = styledComponents.div`
    margin: 1rem 0;
`


export default function Blog() {
    const {id} = useParams()
    const {data,loading,error} = usefetch('http://localhost:8888/blog/get-blog/' + id)

    const [comment, setComment] = useState('')

    

  return (
    <>
    <Header />
    <Wrapper>
      <Flex>
        <Text><span>category: </span>{data.category}</Text>
        <Text><span>likes: </span>{data.likes}</Text>
      </Flex>
    <h1>{data.title}</h1>
    <p>{data.markdown}</p>

    <form>
      <Container>
      <label htmlFor="comment">comment</label>
      <textarea name="comment" id="comment" cols="30" rows="10" onChange={(e => setComment(e.target.value))}></textarea>
      </Container>
      <Button>comment</Button>
    </form>

    </Wrapper>
    </>
  )
}
