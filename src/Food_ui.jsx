import icon from './assets/icon.png';

export function MainSection() {
  return (
    <main>
      <div className="landing-page">
        <h1>Food delivery from the best restaurants in your town</h1>
        <p>Food, drinks, and desserts available for delivery or pickup.</p>

        <div className="search">
          <div className="input-wrap">
            <input type="text" placeholder="Enter delivery address" />
            <i className="fa-solid fa-location-crosshairs"></i>
          </div>
          <a href="#">FIND FOOD</a>
        </div>
      </div>
    </main>
  );
}

export function HeaderSection() {
  return (
    <header>
      <nav>
        <ul>
          <li className="dropdown">
            <span>
              ENG <img src={icon} alt="arrow" />
            </span>
            <ul>
              <li>IND</li>
              <li>RUS</li>
              <li>KOR</li>
            </ul>
          </li>
          <li>Contact</li>
          <li>Log in</li>
          <li className="special">Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export function FooterSection() {
  return (
    <footer>
      <ul>
        <li>Terms of Policy</li>
        <li>Contacts</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <p>© 2023. All rights reserved.</p>
      <div className="socials">
        <a href="https://facebook.com">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default function Value() {
  return (
    <div className='container'>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </div>
  );
 }
// this function is to wrap the sections in a div name container.
