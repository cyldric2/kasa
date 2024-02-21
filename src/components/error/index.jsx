import { Link } from 'react-router-dom'
import '../../utils/style/erreur.scss'

function error() {
  return (
    <div className='flex'>
      <h1 className='chiffre'>404</h1>
      <h1 className='oups'>Oups! La page que vous demandez n'existe pas.</h1>
      <Link  className='retour' to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default error