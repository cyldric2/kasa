import React from 'react';
import '../../utils/style/home .scss'
import { useParams } from 'react-router-dom';
import LogementList from '../../assets/listLogement.json';

function Logement() {
  const id = useParams().id
  const ParamLog = LogementList.find(element => element.id === id)
  console.log(ParamLog);
  return (
    <div className='box'>
     <p>gggg</p>
    </div>

  )
}

export default Logement