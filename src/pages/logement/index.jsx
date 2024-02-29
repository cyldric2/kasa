
import '../../utils/style/logement.scss'
import {  useParams } from 'react-router-dom';
import LogementList from '../../assets/listLogement.json';
import Dropdown from '../../components/dropdown'
import Etoile from '../../components/etoile'
import Carousel from '../../components/carousel'




/*const equipments = styled.div`
  display: flex;
  justify-content: center;
`*/
function Logement() {
  const id = useParams().id
  const ParamLog = LogementList.find(element => element.id === id)
  console.log(ParamLog);
 
  return (
  <div className='box'>
    <Carousel
      picture={ParamLog.pictures} />
    <div className='positionement1'>
      <div className='logTitle'>
        <h1>{ParamLog.title}</h1>
        <p className='location'>{ParamLog.location}</p>
          <div className='positionement2'>
            {ParamLog.tags.map((element, index) => (
              <p  className='tag'key={index}>{element} </p>
            ))}
        </div>
      </div>
      <div  className='logName'>
        <div>
          <h2 >{ParamLog.host.name}</h2>
          <img src={ParamLog.host.picture} alt="visage" />
        </div>
        <Etoile
          rating={ParamLog.rating } />
      </div>
    </div>
    <div className='positionement3'>
      <Dropdown title='équipements' content={ParamLog.equipments} />
      <Dropdown title='description'content={ParamLog.description} />
    </div>
  </div>
  )}

export default Logement
