import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AllModal({ onNewTaskModalShow, onDeleteModalShow, onEditModalShow }) {
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDirectory, setSelectedDirectory] = useState('');

 
  const handleNewTaskModalShow = () => setShowNewTaskModal(true);
  const handleNewTaskModalClose = () => setShowNewTaskModal(false);

  const handleDeleteModalShow = (directory) => {
    setSelectedDirectory(directory);
    setShowDeleteModal(true);
  };
  const handleDeleteModalClose = () => setShowDeleteModal(false);

  const handleEditModalShow = (directory) => {
    setSelectedDirectory(directory);
    setShowEditModal(true);
  };
  const handleEditModalClose = () => setShowEditModal(false);

  
 

  return (
    <>
    
      <Modal show={showNewTaskModal} onHide={handleNewTaskModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here you can add a new task.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewTaskModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNewTaskModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the directory "{selectedDirectory}"?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteModalClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

     
      <Modal show={showEditModal} onHide={handleEditModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>Editing directory: {selectedDirectory}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllModal;
