import useFetch from '../hooks/useFetch'
import style from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Flex, Grid, Wrapper } from './Style'


const Blog = style.div`
    background: linear-gradient(to bottom, #F100DA, #C516B4);
    box-shadow: 0 5px 6px rgba(255 ,255,255,.1);
    padding: 1rem;
    color: white;
    `
    const Title = style.h1`
    font-weight: bold;
    font-size: 2rem;
    text-transform: capitalize;

`
const P = style.p`
    color: white;
`


export default function Blogs() {
    const {data,loading,error} = useFetch('http://localhost:8888/blog/get-blogs')
    console.log(data);
    return (
        <>
     <Wrapper>
    {loading ? <div>loading</div> :
    <Grid>
    {data.map(blog => ((
    <Link to={`/blog/${blog._id}`} style={{textDecorationLine:'none'}}>
        <Blog key={blog._id}>
            <Title>{blog.title}</Title>
            <P>{blog.markdown}</P>
            <Flex>
                <P>category: {blog.category}</P>
                <P>likes: {blog.likes}</P>
            </Flex>
            <Button>read more</Button>
        </Blog>
        </Link>
    )))}
    </Grid>
    }
</Wrapper>   
    </>
  )
}
