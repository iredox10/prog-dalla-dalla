import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import style from 'styled-components'
import Header from '../components/Header'

import { Flex, Wrapper, Text, Button } from '../components/Style'
import usefetch from '../hooks/useFetch'

const Comment = style.div`
    margin: 1rem 0;
    textarea{
      padding: 1rem;
      font: inherit;
    }
`

const Comments = style.div`
    background-color: white;
    color: black;
    margin-top: .4rem;
    padding: 1rem;
    text-transform: capitalize;
`

const Container = style.div`
    display:flex;
    justify-content: space-between;
    color: white;
`

const Div = style.div`
    margin-bottom: 1rem;
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

    const handleLike = async () =>{
      try{
          const res = await axios.post('http://localhost:8888/blog/like/'+id)
          console.log(res.data)
      }
      catch(err){
          console.log(err);
      }
  }

    const handleUnlike = async () =>{
      try{
          const res = await axios.post('http://localhost:8888/blog/unlike/'+id)
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
      <Container>
      <Div>
      <Flex>
        <Text><span>category: </span>{blog.category}</Text>
        <Text><span>likes: </span>{blog.likes }</Text>
      </Flex>
    <h1>{blog.title}</h1>
    <p>{blog.markdown}</p>

    <h1>comments</h1>
      {comments.map(c =>(
        <div key={c._id}>
        <Comments>{c.comment}</Comments>
        </div>
      ))}
    <Flex>
    <form onSubmit={handleLike}>
      <button>like</button>
    </form>

    <form onSubmit={handleUnlike}>
      <button>unlike</button>
    </form>
    </Flex>
    </Div>
    <form onSubmit={handleSubmit}>
      <Comment>
      <textarea name="comment" id="comment" cols="30" rows="10" onChange={(e => setComment(e.target.value))} placeholder="yi tsokaci"></textarea>
      </Comment>
      <Button>yi tsokaci</Button>
    </form>
    </Container>
    
  
    </Wrapper>
    </>
  )
}
