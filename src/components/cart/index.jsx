import { Link } from 'react-router-dom'
import '../../utils/style/cart.scss'



function Cart({cover, title,id}) {
    return (
    
        <div className='lmj-cart'>
            <div>
                <img src={cover} alt="logement"  />
                <Link to={`/Logement/${id}`}>{title}</Link>
                
            </div> 
    </div>
 
    )
}


export default Cart
