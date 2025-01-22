import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';
import {BiLogoGmail}from 'react-icons/bi'
import Style from './Footer.module.css'

function Footer(){
    return (
        <ul className={Style.list}>
            <li> <BsGithub /></li>
            <li> <BsLinkedin /></li>
            <li> <BiLogoGmail /></li>
        </ul>
    )
}

export default Footer;