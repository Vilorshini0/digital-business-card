import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';

export default function Footer() {
    return (
        <section id="footer">
            <ul>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Follow us on Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Follow us on Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Follow us on Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="View our GitHub" />
                    </a>
                </li>
            </ul>
        </section>
    )
}