// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Nav, Navbar, Offcanvas, Button, Modal } from 'react-bootstrap';
// import { FaBars, FaTasks, FaStar, FaCheckCircle, FaTimesCircle, FaFolderPlus, FaEdit, FaTrash } from 'react-icons/fa';
// import ModalDelete from './Modal';
// import ModalNewTask from './ModalNewTask';
// import TaskHeader from './TaskHeader';
// import AllModal from './AllModal';

// const Sidebar = () => {


//   return (
//     <>


//  <Navbar expand="lg"  >
//         <Button variant="light" onClick={handleShow} className="me-2">
//            <FaBars />
//          </Button>
        
//          <Navbar.Brand className="d-none d-lg-block">TO-DO LIST</Navbar.Brand>
//       </Navbar>

//       {/* <Navbar expand="lg" fixed="top" className="d-lg-none">
//         <Button variant="light" onClick={handleShow} className="me-2">
//           <FaBars />
//         </Button>
//         <Navbar.Brand className="d-none d-lg-block">TO-DO LIST</Navbar.Brand>
//       </Navbar> */}

//       <Offcanvas show={show} onHide={handleClose} responsive="xl">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>TO-DO LIST</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div style={{ width: '100%', backgroundColor: '#f8f9fa', paddingTop: '10px' }} className="p-3">
//             <Button  className="btn btn-primary w-100 mb-4" onClick={handleNewTaskModalShow}>
//               <FaFolderPlus className="me-2" />Add New Task
//             </Button>

//             <Nav className="flex-column">
//               <Nav.Item className="mb-2">
//                 <Link to="/" className="nav-link">
//                   <FaTasks className="me-2" />
//                   All Tasks
//                 </Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Link to="/important" className="nav-link">
//                   <FaStar className="me-2" style={{ color: '#ff6347' }} />
//                   Important Tasks
//                 </Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Link to="/completed" className="nav-link">
//                   <FaCheckCircle className="me-2" style={{ color: '#28a745' }} />
//                   Completed Tasks
//                 </Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Link to="/uncompleted" className="nav-link">
//                   <FaTimesCircle className="me-2" style={{ color: '#ffc107' }} />
//                   Uncompleted Tasks
//                 </Link>
//               </Nav.Item>
//             </Nav>

//             <div className="mt-5">
//               <h6>Directories</h6>
//               <Nav className="flex-column">
//                 <Nav.Item className="mb-2 directory-item">
//                   <Link to="/directory/secondary" className="nav-link d-flex justify-content-between align-items-center">
//                     Secondary
//                     <div className="directory-icons">
//                       <FaEdit className="text-info me-2" onClick={() => handleEditModalShow('Secondary')} />
//                       <FaTrash className="text-danger" onClick={() => handleDeleteModalShow('Secondary')} />
//                     </div>
//                   </Link>
//                 </Nav.Item>
//                 <Nav.Item className="mb-2 directory-item">
//                   <Link to="/directory/main" className="nav-link d-flex justify-content-between align-items-center">
//                     Main
                  
//                   </Link>
//                 </Nav.Item>
//               </Nav>
//               <Nav.Item className="mt-3">
//                 <Link to="/directory/new" className="nav-link">
//                   <FaFolderPlus className="me-2" /> + New
//                 </Link>
//               </Nav.Item>
//             </div>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>

      
//       <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete Directory</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to delete the directory "{selectedDirectory}"?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>

      
//       <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Directory</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
         
//           <p>Editing directory: {selectedDirectory}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleEdit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
// {/* <ModalNewTask show={showNewTaskModal} onHide={handleNewTaskModalClose} /> */}
//     <AllModal />
//     </>
//   );
// };

// export default Sidebar;






import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { Nav, Navbar, Offcanvas, Button, Modal, Form } from 'react-bootstrap';
import { FaBars, FaTasks, FaStar, FaCheckCircle, FaTimesCircle, FaFolderPlus, FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  const handleNewTaskModalShow = () => setShowNewTaskModal(true);
  const handleNewTaskModalClose = () => {
    reset();
    setShowNewTaskModal(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    handleNewTaskModalClose();
  };

  return (
    <>
      
      <Navbar expand="lg">
        <Button variant="light" onClick={handleOffcanvasShow} className="me-2">
          <FaBars />
        </Button>
        <Navbar.Brand className="d-none d-lg-block">TO-DO LIST</Navbar.Brand>
      </Navbar>





<Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} responsive="xl">
         <Offcanvas.Header closeButton>

        <Offcanvas.Title>TO-DO LIST</Offcanvas.Title>  
         </Offcanvas.Header>
         <Offcanvas.Body>
           <div style={{ width: '100%', backgroundColor: '#f8f9fa', paddingTop: '10px' }} className="p-3">
             <Button className="btn btn-primary w-100 mb-4" onClick={handleNewTaskModalShow}>
               <FaFolderPlus className="me-2" /> Add New Task
             </Button>



             <Nav className="flex-column">
              <Nav.Item className="mb-2">
                 <Link to="/" className="nav-link">
                   <FaTasks className="me-2" />
                  All Tasks
                 </Link>
              </Nav.Item>
               <Nav.Item className="mb-2">
                <Link to="/important" className="nav-link">
                   <FaStar className="me-2" style={{ color: '#ff6347' }} />
                   Important Tasks
                </Link>
              </Nav.Item>
               <Nav.Item className="mb-2">
                <Link to="/completed" className="nav-link">
                   <FaCheckCircle className="me-2" style={{ color: '#28a745' }} />
                   Completed Tasks
                 </Link>
               </Nav.Item>
               <Nav.Item className="mb-2">
                 <Link to="/uncompleted" className="nav-link">
                   <FaTimesCircle className="me-2" style={{ color: '#ffc107' }} />
                   Uncompleted Tasks
                 </Link>
              </Nav.Item>
            </Nav>


            <div className="mt-5">
               <h6>Directories</h6>
               <Nav className="flex-column">
                 <Nav.Item className="mb-2 directory-item">
                   <Link to="/directory/secondary" className="nav-link d-flex justify-content-between align-items-center">
                     Secondary
                     <div className="directory-icons">
                       <FaEdit className="text-info me-2" onClick={() => handleEditModalShow('Secondary')} />
                       <FaTrash className="text-danger" onClick={() => handleDeleteModalShow('Secondary')} />
                     </div>
                  </Link>
                 </Nav.Item>
                 <Nav.Item className="mb-2 directory-item">
                   <Link to="/directory/main" className="nav-link d-flex justify-content-between align-items-center">
                     Main
                  
                   </Link>
                 </Nav.Item>
               </Nav>
              <Nav.Item className="mt-3">
                 <Link to="/directory/new" className="nav-link">
                   <FaFolderPlus className="me-2" /> + New
                 </Link>
               </Nav.Item>
            </div>


         </div>
         </Offcanvas.Body>
       </Offcanvas>











      {/* Modal for New Task */}
      <Modal show={showNewTaskModal} onHide={handleNewTaskModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Task Title */}
            <Form.Group className="mb-3">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                {...register('title', { required: true })}
              />
            </Form.Group>

            {/* Task Date */}
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" {...register('date', { required: true })} />
            </Form.Group>

            {/* Task Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                {...register('description')}
              />
            </Form.Group>

            {/* Select Directory */}
            <Form.Group className="mb-3">
              <Form.Label>Select a Directory</Form.Label>
              <Form.Select {...register('directory', { required: true })}>
                <option value="main">Main</option>
                <option value="secondary">Secondary</option>
              </Form.Select>
            </Form.Group>

            {/* Checkboxes */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Mark as Important"
                {...register('isImportant')}
              />
              <Form.Check
                type="checkbox"
                label="Mark as Completed"
                {...register('isCompleted')}
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleNewTaskModalClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sidebar;




