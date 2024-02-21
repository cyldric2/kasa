
import { Link } from 'react-router-dom'
import logoRouge from '../../assets/.Logo-rouge.png'
import '../../utils/style/header.scss'

function Header() {
  return (
    <nav className='lmj-header'>
      <img src={logoRouge} alt='logoRouge' />
      <div >
        <Link   to="/">Accueil</Link>
        <Link  to="/apropos">a propos</Link>
      </div>
    </nav>
   
  )
}

export default Header