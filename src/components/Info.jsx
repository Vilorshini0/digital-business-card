import profilePic from '../assets/profilepic.webp'
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';

export default function Info () {
    return (
        <section className="info">
            <figure>
                <img src={profilePic} alt="Portrait of Vilorshini Ramsamy" />
            </figure>

            <header className="info--personal">
                <h1>Vilorshini Ramsamy</h1>
                <h2>Frontend Developer</h2>
                <p>
                    <a href="https://github.com/Vilorshini0" target="_blank" rel="noopener noreferrer"> github.com/Vilorshini0</a>
                </p>
            </header>

            <nav className="info--links">
                <a className="email" target="_blank" href="mailto:ramsamyvilorshini@gmail.com">
                    <img src={email} alt="" />
                    <span>Email</span>
                </a>

                <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/vilorshiniramsamy/" rel="noopener noreferrer">
                    <img src={linkedin} alt="" />
                    <span>LinkedIn</span>
                </a>
            </nav>
        </section>
    )
}