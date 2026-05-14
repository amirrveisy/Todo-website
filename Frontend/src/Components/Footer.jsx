import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-top mt-5">
            <div className="container py-4">

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

                    {/* Left */}
                    <div className="mb-3 mb-md-0">
                        <h5 className="fw-bold mb-1" style={{ color: '#db4c3f' }}>
                            TodoList
                        </h5>

                    </div>

                    {/* Center */}
                    <div className="mb-3 mb-md-0 d-flex gap-4">

                        <small>© 2026 All rights reserved</small>
                    </div>

                    {/* Right */}
                    <div className="text-muted">
                        <a href="https://github.com/amirrveisy" target="_blank">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/amirrveisy/" target="_blank">
                            <FaLinkedin size={30} />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer