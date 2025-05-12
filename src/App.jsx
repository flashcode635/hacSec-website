import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './site/navbar/navbar';
import New from './site/frontPage/new';
import Courses from './site/cources/courses';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}