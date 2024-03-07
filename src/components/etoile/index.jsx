import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import '../../utils/style/etoile.scss'


function Etoile(rating) {
    const nombreEtoile = []
    const nombreEtoileNoir = []
    const ParamRating = rating 
    
    for (let index = 1; index < 6; index++) {
        if (index <= ParamRating.rating) {
            nombreEtoile.push(<FontAwesomeIcon className='starActive ' icon={faStar} />)
        }
        else {
            nombreEtoileNoir.push(<FontAwesomeIcon className='starDesactive' icon={faStar} />)
        }
    }
        return(
        <div>
            {nombreEtoile.map((element, index) => (
              <p key={index}>{element} </p>
            ))}
            {nombreEtoileNoir.map((element, index) => (
              <p key={index}>{element} </p>
            ))}
            </div>
            )
    }
    export default Etoile