
import React from 'react';
import '../../utils/style/home .scss'
import Cart from '../../components/cart'
import Banner from '../../components/banner';
import LogementList from '../../assets/listLogement.json';
import ImgLayout from '../../assets/img layout.jpg'

function home() {
  return (
    <div className='box'>
      <Banner
        fond={ImgLayout}
        title={'Chez vous, partout et ailleurs '} />
      <div className='lmj-layout'> 
         {LogementList.map((profile, index) => (
          <Cart
            key={`${profile.title}-${index}`}
            cover={profile.cover}
             title={profile.title} 
            id={profile.id}
          />
        ))}
      </div>
    </div>

  )
}

export default home