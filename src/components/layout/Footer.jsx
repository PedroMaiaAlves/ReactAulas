import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return<footer>Rodapé da aplicação
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaWhatsapp/></li>
        </ul>
            <p>Nosso rodape</p>
    </footer>
}

export default Footer