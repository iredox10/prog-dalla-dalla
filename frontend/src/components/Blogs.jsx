import useFetch from '../hooks/useFetch'
import style from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Wrapper } from './Style'


const Blog = style.div`
    background: white;
    box-shadow: 0 2px 2px 3px rgba(0,0,0,.1);
    padding: .5rem;
`
const Title = style.h1`
    font-size: 2rem;
    text-transform: capitalize;

`
const P = style.p`
`


export default function Blogs() {
    const {data,loading,error} = useFetch('http://localhost:8888/blog/get-blogs')
    console.log(data);
    return (
        <>
     <Wrapper>
    {loading ? <div>loading</div> :
    <Flex>
    {data.map(blog => ((
    <Link to={`/blog/${blog._id}`} style={{textDecorationLine:'none'}}>
        <Blog key={blog._id}>
            <Title>{blog.title}</Title>
            <P>{blog.markdown}</P>
            <Flex>
                <P>category: {blog.category}</P>
                <P>likes: {blog.likes}</P>
            </Flex>
        </Blog>
        </Link>
    )))}
    </Flex>
    }
</Wrapper>   
    </>
  )
}
