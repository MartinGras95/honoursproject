

function Navbar() {
    return(
        <nav>
            <div className="nav-wrapper purple darken-2">
                <a href="/" className="brand-logo">codeMate</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#!">Sign in</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;