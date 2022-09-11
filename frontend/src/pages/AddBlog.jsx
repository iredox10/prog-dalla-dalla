import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import styledComponents from 'styled-components'
import Header from '../components/Header'
import { Button, Wrapper } from '../components/Style'
import usePost from '../hooks/usePost'

const Container = styledComponents.div`
    margin: 1rem 0;
`


export default function AddBlog() {
    const [title, setTitle] = useState('')
    const [markdown, setMarkdown] = useState('')
    const [category, setCategory] = useState('')

    // const Post= usePost('',{title,markdown,category})

    const handleSubmit = async () =>{
        try{
            const res = await axios.post('http://localhost:8888/blog/add-blog',{title,markdown,category})
            console.log(res.data)
        }
        catch(err){
            console.log(err );
        }
    }

  return (
    <>
    <Header />
    <Wrapper>
        <form onSubmit={handleSubmit}>
            <h1>add blog</h1>
            <Container>
            <label htmlFor="title">blog title</label>
                <input type="text" name='title' id='title' onChange={(e => setTitle(e.target.value))} />
            </Container>
            <Container>
            <label htmlFor="title">markdown</label>
                <textarea name="markdown" id="maekdown" cols="30" rows="10" onChange={(e => setMarkdown(e.target.value))}></textarea>
            </Container>
            <Container>
                <select name="category" id="category" onChange={(e => setCategory(e.target.value))}>
                    <option value="Html">Html</option>
                    <option value="Css">Css</option>
                    <option value="Javascript">Javascript</option>
                    <option value="tips">tips</option>
                    <option value="ComputerScience">Computer Science</option>
                </select>
            </Container>
            <Container>
                <Button>add blog</Button>
            </Container>
        </form>
    </Wrapper>
    </>
  )
}
