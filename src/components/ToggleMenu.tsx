import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5/index'
import { useStore } from '@nanostores/react'
import { isNavOpen } from '../context/isNavOpen'

export function ToggleMenu (): JSX.Element {
  const $isNavOpen = useStore(isNavOpen)

  const toggle = (): void => { isNavOpen.set(!$isNavOpen) }

  return (
      <button onClick={toggle} className={`burger ${$isNavOpen ? 'active' : ''}`}>
        {$isNavOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
  )
}
