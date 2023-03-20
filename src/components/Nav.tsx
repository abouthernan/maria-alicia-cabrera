import { useStore } from '@nanostores/react'
import { isNavOpen } from '../context/isNavOpen'

export function Nav (): JSX.Element {
  const $isNavOpen = useStore(isNavOpen)

  const toggle = (): void => { isNavOpen.set(!$isNavOpen) }

  return (
  <nav className="nav">
    <a className="nav__link" onClick={toggle} href="/">Inicio</a>
    <a className="nav__link" onClick={toggle} href="/#sobre-mi">Sobre mí</a>
    <a className="nav__link" onClick={toggle} href="/#galeria">Galería</a>
    <a className="nav__link" onClick={toggle} href="/biblioteca">Biblioteca</a>
    <a className="nav__link" onClick={toggle} href="/articulos">Artículos</a>
    <a className="nav__link" onClick={toggle} href="/columnas">Columnas</a>
  </nav>
  )
}
