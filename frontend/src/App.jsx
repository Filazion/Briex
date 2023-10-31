
import { Routes, Route} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/sign-up' element = {<SignUp />}/>
        <Route path = '/sign-in' element = {<SignIn />}/>
        <Route path = '/about' element = {<About />}/>
        <Route path = '/profile' element = {<Profile />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
