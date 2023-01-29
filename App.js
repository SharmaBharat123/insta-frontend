import './App.css';
import Form from './component/form/form';
import Header from './component/header/header';
import LandingPage from './component/landing-page/landing-page';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//const HomePage = ()=>{
//  return(
//    <div>
//      <Link to="/">addpost</Link>
//      <Link to="/addpost">See all post</Link>
//    </div>
//  )
//}


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/' element={<LandingPage />}/>
        <Route path='/addpost' element={<Form />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
