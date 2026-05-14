import SUForm from './SignUpform'
import LoginForm from './LoginForm'
import { useState } from 'react'
import util from '../util'


const NavigationBar = ({ stateChanger }) => {



    return (
        <nav
            className="navbar navbar-expand-lg px-4"
            style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eee" }}
        >
            <div className="container-fluid">

                {/* Left: Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Todoist_logo.png"
                        alt="logo"
                        style={{ width: "28px", marginRight: "10px" }}
                    />
                    <span style={{ color: "#dba23f", fontWeight: "600", fontSize: "20px" }}>
                        TodoList
                    </span>
                </a>

                {/* Right side */}
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav align-items-center gap-3">



                        {/* Divider */}
                        <div
                            style={{
                                width: "1px",
                                height: "24px",
                                backgroundColor: "#ddd",
                            }}
                        ></div>

                        <li className="nav-item">
                            <button
                                onClick={() => { stateChanger(util.VIEWS.LOGIN) }}
                                className="btn"
                                style={{
                                    backgroundColor: "#fc6A03",
                                    color: "white",
                                    borderRadius: "8px",
                                    padding: "6px 14px",
                                    fontWeight: "600",
                                }}
                            >
                                login
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                onClick={() => { stateChanger(util.VIEWS.SIGNUP) }}
                                className="btn"
                                style={{
                                    backgroundColor: "#fc6A03",
                                    color: "white",
                                    borderRadius: "8px",
                                    padding: "6px 14px",
                                    fontWeight: "600",
                                }}
                            >
                                SignUp
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );


}

export default NavigationBar