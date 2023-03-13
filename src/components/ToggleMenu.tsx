import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

export function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <button onClick={toggle} className={`burger ${isOpen ? 'active' : ''}`}>
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
  );
}
