

import '../../utils/style/banner.scss'

function Banner({ fond, title }) {
  return (
   <nav className='lmj-banner'> 
      <img  src={fond } alt="fond " />
      <h1 > { title}</h1>
    </nav>
  )
}

export default Banner