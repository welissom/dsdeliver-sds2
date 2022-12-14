import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior <br />
            <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/school/devsuperior/">
                <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/devsuperior.ig/">
                <InstagramIcon />
            </a>
        </footer>
    )
}

export default Footer;