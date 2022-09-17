import Home from './pages/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Blog from './pages/Blog'
import AddBlog from './pages/AddBlog'
import GlobalStyle from './G_style'
function App() {

  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element ={<Home />} exact />
          <Route path='/blog/:id' element ={<Blog />}  />
          <Route path='/add-blog' element={<AddBlog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
