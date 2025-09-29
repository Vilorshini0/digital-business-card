import github from '../assets/github.png';

export default function Footer() {
    return (
        <section id="footer">
            <ul>
                <li>
                    <a href="https://github.com/Vilorshini0" target="_blank">
                        <img src={github} alt="View my GitHub" />
                    </a>
                </li>
            </ul>
        </section>
    )
}