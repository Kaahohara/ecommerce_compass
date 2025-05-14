import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalForm: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600">X</button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
