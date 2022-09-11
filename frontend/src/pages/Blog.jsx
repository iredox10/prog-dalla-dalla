import axios from 'axios'
import { useState, useEffect } from 'react'
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
  const blog = data
  const [comments, setComments] = useState([])

  useEffect(() =>{
    const fetch = async () =>{
      const res = await axios.get('http://localhost:8888/blog/get-comment/'+id)
      setComments(res.data)
      console.log(res.data);
    }
    fetch()
  },[comments,id])
  
  const [comment, setComment] = useState('')
    const handleSubmit = async () =>{
      try{
          const res = await axios.post('http://localhost:8888/blog/comment/'+id,{comment})
          console.log(res.data)
      }
      catch(err){
          console.log(err);
      }
  }


  return (
    <>
    <Header />
    <Wrapper>
      <Flex>
        <Text><span>category: </span>{blog.category}</Text>
        <Text><span>likes: </span>{blog.likes}</Text>
      </Flex>
    <h1>{blog.title}</h1>
    <p>{blog.markdown}</p>

      
        
    <form onSubmit={handleSubmit}>
      <Container>
      <label htmlFor="comment">comment</label>
      <textarea name="comment" id="comment" cols="30" rows="10" onChange={(e => setComment(e.target.value))}></textarea>
      </Container>
      <Button>comment</Button>
    </form>

    <h1>comments</h1>
      {comments.map(c =>(
        <p>{c.comment}</p>
      ))}

    </Wrapper>
    </>
  )
}
