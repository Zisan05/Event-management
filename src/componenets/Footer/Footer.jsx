

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Weddings</a>
    <a className="link link-hover">Birthday Parties</a>
    <a className="link link-hover">Anniversaries Event</a>
    <a className="link link-hover">Engagement Parties</a>
    <a className="link link-hover">Retirement Parties</a>
    <a className="link link-hover">Baby shower</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;