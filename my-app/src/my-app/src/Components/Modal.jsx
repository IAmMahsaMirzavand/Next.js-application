import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const ModalDelete = ({ title, onDelete }) => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <button onClick={() => setShowModal(true)} className="btn btn-link text-decoration-none p-0">
          <FaTrash className="text-danger" />
        </button>
  
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete this task?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => { onDelete(); setShowModal(false); }}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  

  export default ModalDelete;


