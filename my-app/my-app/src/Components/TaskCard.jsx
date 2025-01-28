import React from 'react';
import { FaCalendarAlt, FaStar, FaTrash, FaEdit } from 'react-icons/fa';
import ModalDelete from './Modal';

const TaskCard = ({ title, description, date, status, isImportant, onEdit, onDelete, onToggleImportant, onToggleStatus }) => {
  return (
    <div className="card p-3 mb-4" style={{ width: '18rem', borderRadius: '10px', position: 'relative', backgroundColor: status === 'completed' ? '#e0f7fa' : '#f3e5f5' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#ff7272',
        color: '#fff',
        padding: '5px 10px',
        fontSize: '0.8rem',
        borderBottomRightRadius: '10px'
      }}>
        Main
      </div>

      <div className="card-body">
        <h5 className="card-title" style={{ color: status === 'completed' ? 'green' : 'purple' }}>{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex align-items-center mb-2">
          <FaCalendarAlt className="me-2 text-muted" />
          <small>{date}</small>
        </div>
      </div>

      <div className="card-footer d-flex justify-content-between align-items-center">
        <span
          className={`badge ${status === 'completed' ? 'bg-success' : 'bg-warning'}`}
          onClick={onToggleStatus} 
        >
          {status}
        </span>

        <div className="d-flex align-items-center">
          <button onClick={onToggleImportant} className="btn btn-link text-decoration-none p-0 me-2">
            <FaStar className={isImportant ? 'text-warning' : 'text-muted'} />
          </button>
          <button onClick={onEdit} className="btn btn-link text-decoration-none p-0 me-2">
            <FaEdit className="text-info" />
          </button>
          <button onClick={onDelete} className="btn btn-link text-decoration-none p-0">
            <ModalDelete className="text-danger" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;


