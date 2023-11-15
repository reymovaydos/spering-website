import './navbar.scss';
import LogoImg from '../../assets/images/logo.png'
export const Navbar = () => {
    return (
        <>
        <div className="navbar">
        <div className="navbar-logo">
                <img src={LogoImg} alt="" />
                <h2>Sperring</h2>
            </div>
            <nav class="menu--right" role="navigation">
                <div class="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul class="menuItem">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/category">Category</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}