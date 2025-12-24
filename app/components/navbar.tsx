import { Link } from "react-router"

const Navbar :() => Element = () => {
    return (
            <nav className="navbar">
                <Link>
                    <p className="text-2xl font-bold text-gradient">ResumeAi</p>
                </Link>
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
            </nav>
    )
}
export default Navbar