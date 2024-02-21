
import logoNoir from '../../assets/.logo-noir.png'
import '../../utils/style/footer.scss'

function Footer() {
  return (
    <nav className='lmj-footer'>
      <img src={logoNoir} alt='logonoir' />
      <p>© 2020 Kasa. All rights reserved</p>
    </nav>
   
  )
}

export default Footer