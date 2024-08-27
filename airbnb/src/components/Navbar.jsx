import logo from '../assets/logo.png'
import '../index.css'

export default function(){
    return(
        <nav>
            <img className="nav--logo"src={logo}/>
        </nav>
    );
}