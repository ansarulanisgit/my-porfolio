import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import AddPortfolio from './components/dashboard/portfolio/AddPortfolio';
import AllPortfolio from './components/dashboard/portfolio/AllPortfolio';
import UpdatePortfolio from './components/dashboard/portfolio/UpdatePortfolio';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTestimonial from './components/dashboard/testomonials/AllTestimonial';
import AddTestimonial from './components/dashboard/testomonials/AddTestimonial';
import UpdateTestimonial from './components/dashboard/testomonials/UpdateTestimonial';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/dashboard/portfolio' element={<AllPortfolio></AllPortfolio> }></Route>
       <Route path='/dashboard/add-portfolio' element={<AddPortfolio></AddPortfolio> }></Route>
       <Route path='/dashboard/update-portfolio/:id' element={<UpdatePortfolio></UpdatePortfolio>}></Route>
       <Route path='/dashboard/testimonials' element={<AllTestimonial></AllTestimonial> }></Route>
       <Route path='/dashboard/add-testimonial' element={<AddTestimonial></AddTestimonial> }></Route>
       <Route path='/dashboard/update-testimonial/:id' element={<UpdateTestimonial></UpdateTestimonial>}></Route>

     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
