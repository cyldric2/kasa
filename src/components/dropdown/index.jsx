import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import '../../utils/style/dropdown.scss'
import "@fontsource/montserrat";

function Dropdown({ title,content}) {
	const [isOpen, setIsOpen] = useState(true)
    const arrowup = <FontAwesomeIcon icon={faChevronUp} />
    const arrowdown = <FontAwesomeIcon icon={faChevronDown} />
	return isOpen ? (
        <div className='Top-bar'onClick={() => setIsOpen(false)}>
            <h3 className='texte' >
                <p>{title}</p>
                <p> {arrowup}</p>
            </h3>
                
		</div>
	) : (
            <div className='Top-bar' onClick={() => setIsOpen(true)}>
                <h3 className='texte' >
                    <p>{title}</p>
                    <p>{arrowdown}</p>
                </h3>
                <div className='content'>
                    <ul >{Array.isArray(content)? content.map((element, index) => (
                    <p key={index}>{element} </p>
                    ))
                    : content}</ul>
            </div>
        </div>
	)
}


export default Dropdown
