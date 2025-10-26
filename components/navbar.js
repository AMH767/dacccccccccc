class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.95);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .logo {
          color: #b58f76;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #6b513a;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        a:hover {
          color: #b58f76;
        }
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #b58f76;
          transition: width 0.3s ease;
        }
        a:hover::after {
          width: 100%;
        }
        .nav-button {
          display: none;
          background: none;
          border: none;
          color: #6b513a;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
          }
          ul.active {
            left: 0;
          }
          .nav-button {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="compass" class="logo-icon"></i> ClayCraft
        </a>
        <button class="nav-button" id="menu-toggle">
          <i data-feather="menu"></i>
        </button>
        <ul id="nav-menu">
          <li><a href="#about">О студии</a></li>
          <li><a href="#gallery">Галерея</a></li>
          <li><a href="#classes">Мастер-классы</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    `;
    
    // Initialize menu toggle for mobile
    const menuToggle = this.shadowRoot.getElementById('menu-toggle');
    const navMenu = this.shadowRoot.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      feather.replace();
    });
    
    // Close menu when clicking a link (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);