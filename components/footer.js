class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #513d28;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: #e8d5c9;
        }
        .footer-section p, .footer-section a {
          color: #c9a993;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .footer-section a:hover {
          color: white;
          text-decoration: underline;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          background: #6b513a;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: #b58f76;
          transform: translateY(-3px);
        }
        .copyright {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #6b513a;
          color: #c9a993;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>ClayCraft Studio</h3>
            <p>Гончарная студия, где каждый может открыть для себя искусство керамики и создать уникальные изделия своими руками.</p>
          </div>
          <div class="footer-section">
            <h3>Контакты</h3>
            <p><i data-feather="map-pin"></i> ул. Гончарная, 15, Москва</p>
            <p><i data-feather="phone"></i> +7 (495) 123-45-67</p>
            <p><i data-feather="mail"></i> info@claycraftstudio.ru</p>
          </div>
          <div class="footer-section">
            <h3>Мы в соцсетях</h3>
            <div class="social-links">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} ClayCraft Studio. Все права защищены.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);