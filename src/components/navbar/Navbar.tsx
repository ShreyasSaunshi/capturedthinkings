import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-border">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Contribute</a>
          </li>
        </ul>
        <div className="drowdown-main">
          <ul>
            <li>
              <a href="">Languages</a>
            </li>
          </ul>
          <div className="dropdown-sub">
            <ul>
              <li>
                <a href="">English</a>
              </li>
              <li>
                <a href="">Kannada</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
