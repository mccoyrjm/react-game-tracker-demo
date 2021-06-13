import { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'

const Header = (): ReactElement => {
  const isLogin = useLocation().pathname === '/'

  return isLogin ? <></> : <header>This is my header.</header>
}

export default Header
