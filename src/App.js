
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Refrence from './Component/Referance';
import Community from './Component/Community';
import Blog from './Component/Blog';
import Navbar from './Component/Navbar';
import Home from './Component/Learn';




function App() {
  return (
    <div className="App">
      <Router>
    

        {/* <Link to='/Learn' className='btn btn-primary m-2'>Learn</Link> */}
        {/* <Link to='/Referance' className='btn btn-success m-2'>Referance</Link> */}
        {/* <Link to='/Community' className='btn btn-danger m-2'>Community</Link> */}
        {/* <Link to='/Blog' className='btn btn-secondary m-2'>Blog</Link> */}
        {/* <Link to='/' className='btn btn-warning m-2'>home</Link> */}
     <Navbar/>
        <Routes>
            <Route exact path='/Home' element={<Home/>}/>
          <Route exact path='/refrance' element={<Refrence/>}/>
          <Route exact path='/Community' element={<Community/>}/>
          <Route exact path='/Blog' element={<Blog/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

// function App(){
//   return(
    
//     <div className="App">
      
//       <Router>
//     <Link to="/home" className='btn btn-primary'> home page</Link>
//     <Link to="/register"  className='btn btn-success'>register page</Link>
//     <Link to="/login" className='btn btn-danger'>login page</Link>
//     <Link to="/" className='btn btn-danger'>root page</Link>

//         <Routes>


//           <Route path='/home' element={<Home />}/>
//           <Route path='/register' element={<Register />}/>
//           <Route path='/login' element={<Login />}/>
//         </Routes>
//       </Router>



//       {/* <Home />
//       <Login />
//       <Register /> */}
//     </div>
//   )
// }

// export default App