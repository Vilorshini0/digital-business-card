import profilePic from '../assets/profile.png';
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
                    <a href="https://github.com/Vilorshini0"> github.com/Vilorshini0</a>
                </p>
            </header>

            <section className="info--links">
                <button className="btn email" target="_blank" onClick={() => window.location.href = "mailto:ramsamyvilorshini@gmail.com"} >
                    <img src={email} alt="" />
                    <span>Email</span>
                </button>

                <button className="btn linkedin" target="_blank" onClick={() => window.location.href = ("https://www.linkedin.com/in/vilorshiniramsamy/", "_blank")}>
                    <img src={linkedin} alt="" />
                    <span>LinkedIn</span>
                </button>
            </section>
        </section>
    )
}