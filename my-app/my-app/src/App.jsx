// import React, { useState } from 'react';



// import TodoList from './TodoList';
// import { BrowserRouter as Router } from "react-router-dom"; 


// const App = () => {

//   return (
//     <>
    
   
//      {/* <TodoList/> */}
//      <Router>  
    
//      <TodoList/>
//   </Router>,
   
//     </>
//   );
// };

// export default App;




// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
// import MainContent from './Components/MainContent';
// import ModalNewTask from './Components/ModalNewTask';
// import ModalDelete from './Components/Modal';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Sidebar with navigation links */}
//         <Sidebar  />

//         {/* Main content that will change based on routes */}
//         <div className="main-content">
//           <Routes>
//             {/* Define your routes here */}
//             <Route path="/" element={<MainContent />} />
//             <Route path="/important" element={<MainContent filter="important" />} />
//             <Route path="/completed" element={<MainContent filter="completed" />} />
//             <Route path="/new-task" element={<ModalNewTask />} />
//             <Route path="/delete-task/:id" element={<ModalDelete />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import MainContent from './Components/MainContent';
import TaskItem from './Components/TaskItem';

function App() {
  return (
    <Router>
       
      <div className="container">
        <Routes>
          {/* مسیر صفحه اصلی */}
          <Route path="/" element={<MainContent />} />

          {/* مسیر برای نمایش تسک‌های مهم */}
          <Route path="/important" element={<MainContent filter="important" />} />

          {/* مسیر برای نمایش تسک‌های تکمیل‌شده */}
          <Route path="/completed" element={<MainContent filter="completed" />} />

          {/* مسیر برای نمایش تسک‌های تکمیل‌نشده */}
          <Route path="/uncompleted" element={<MainContent filter="uncompleted" />} />

          {/* مسیر برای نمایش جزئیات یک تسک */}
          <Route path="/task/:id" element={<TaskItem />} />

          {/* صفحه 404 برای مسیرهای اشتباه */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
