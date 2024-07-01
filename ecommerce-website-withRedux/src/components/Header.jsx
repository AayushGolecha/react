import './style.css'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.svg'
import logo from '../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/countSlice'

// eslint-disable-next-line react/prop-types
const Header = ({ isLogged, setIsLogged, name }) => {
    const count = useSelector((state) => state.count.value)
    const dispatch = useDispatch()
    const handleDelete = () => {
        localStorage.removeItem('carts')
        setIsLogged(false);
    }
    return (
        <div className='head'>
            <ul>
                <Link to={isLogged ? `/${name}` : `/`}><img src={logo} alt='logo' /></Link>
                <Link to={isLogged ? `/${name}` : `/`}><li>Home</li></Link>
                <Link to={isLogged ? `/about/${name}` : `/about`}><li>About</li></Link>
                <Link to={isLogged ? `/contact/${name}` : `/contact`}><li>Contact</li></Link>
            </ul>
            <input type='search' placeholder='Search Products' />
            <div className='box'>
                <Link to={isLogged ? `/cart/${name}` : `/cart`}>
                    <div className='cart'>
                        <img src={cart} alt='cart' />
                        {count >= 1 && isLogged ? <p>{count}</p> : ''}
                    </div>
                </Link>
                {isLogged ? <p>{name}</p> : ''}
                <Link to={isLogged ? '/' : '/login'}><button onClick={() => {  handleDelete();dispatch(logout()) }}>{isLogged ? 'Logout' : 'Login'}</button></Link>
            </div>
        </div>
    )
}
export default Header