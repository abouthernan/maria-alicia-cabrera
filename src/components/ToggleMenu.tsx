import { useState } from 'react'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5/index'

export function ToggleMenu (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = (): void => { setIsOpen(!isOpen) }

  return (
      <button onClick={toggle} className={`burger ${isOpen ? 'active' : ''}`}>
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
  )
}
