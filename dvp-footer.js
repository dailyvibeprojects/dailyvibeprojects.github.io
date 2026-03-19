class DvpFooter extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        :host {
          display: block;
          width: 100%;
          margin-top: 4rem;
        }

        footer {
          text-align: center;
          padding: 1.5rem;
          font-family: 'Space Mono', 'Courier New', monospace;
          font-size: 0.72rem;
          font-style: italic;
          opacity: 0.6;
        }

        footer:hover { opacity: 1; }

        a {
          color: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        a:hover { text-decoration: underline; }

        strong {
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .sep {
          margin: 0 0.4rem;
          opacity: 0.4;
        }
      </style>

      <footer>
        <span class="sep">//</span>
        a <a href="https://dailyvibeprojects.github.io"><strong>dailyvibeprojects</strong></a> thing
        <span class="sep">//</span>
      </footer>
    `;
  }
}

customElements.define('dvp-footer', DvpFooter);
