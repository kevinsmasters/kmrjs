import Link from 'next/link'
import Image from 'next/image'

export default function MainNav() {
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container">
                <Link href="#">
                <a className="navbar-brand">
                    <Image
                        src="/images/tiki.png" // Route of the image file
                        height={50} // Desired size with correct aspect ratio
                        width={43} // Desired size with correct aspect ratio
                        alt="Kevin Masters Web Developer"
                    />
                </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="#top">
                                <a className="nav-link active">Home
                            </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#mission">
                                <a className="nav-link active">Mission
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#projects">
                                <a className="nav-link active">Projects
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#stories">
                                <a className="nav-link active">Stories
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#contact">
                                <a className="nav-link active">Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-md-auto social-nav">
                        <li className="nav-item">
                            <a target="_blank" rel="noopener" className="nav-link" href="https://github.com/kevinsmasters"><i className="fa-brands fa-github"></i> GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" rel="noopener" className="nav-link" href="https://www.linkedin.com/in/kevinsmasters/"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                        </li>
                </ul>
                </div>
            </div>
            
      <style jsx>{`
        .navbar-brand {
            background-color: rgba(255,255,255,.55);
        }
        `}</style>
        </nav>
        
    )
}