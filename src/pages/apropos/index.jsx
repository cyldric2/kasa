import React from 'react';
import '../../utils/style/apropos.scss'
import Banner from '../../components/banner'
import ImgApropos from '../../assets/img apropos.jpg'
import Dropdown from '../../components/dropdown'
import ListApropos from '../../assets/listapropos.json'

function apropos() {
  return (
    <div className='box'>
      <Banner
        fond={ImgApropos}
        title={' '} />
      <div className='valeur'> 
         {ListApropos.map((profile, index) => (
          <Dropdown
             key={`${profile.title}-${index}`}
             title={profile.Title} 
            content={profile.Content}
            
          />
        ))}
      </div>
    </div>

  )
}



export default apropos
