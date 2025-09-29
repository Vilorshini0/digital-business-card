import github from '../assets/github.png';

export default function Footer() {
    return (
        <footer id="footer">
            <ul>
                <li>
                    <a href="https://github.com/Vilorshini0" target="_blank">
                        <img src={github} alt="View my GitHub" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}