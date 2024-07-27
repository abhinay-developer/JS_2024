import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">React Crud</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse float-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {/* <a class="nav-link" href="login">Login</a> */}
                            <Link to="login" class="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="create-account">Create Account</a> */}
                            <Link to="create-account" class="nav-link">Create Account</Link>

                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="create-account">Create Account</a> */}
                            <Link to="view-users" class="nav-link">View Users</Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
