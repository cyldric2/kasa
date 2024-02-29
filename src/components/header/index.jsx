
import {  NavLink } from 'react-router-dom'
import logoRouge from '../../assets/.Logo-rouge.png'
import '../../utils/style/header.scss'

function Header() {
  return (
    <nav className='lmj-header'>
      <img src={logoRouge} alt='logoRouge' />
      <div >
        <NavLink   to="/">Accueil</NavLink>
        <NavLink  to="/apropos">A Propos</NavLink>
      </div>
    </nav>
   
  )
}

export default Header