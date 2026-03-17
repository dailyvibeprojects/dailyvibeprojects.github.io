class DvpFooter extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Space+Mono&display=swap');

        :host {
          display: block;
          width: 100%;
          margin-top: 4rem;
        }

        footer {
          border-top: 3px double #1a1a18;
          background: #fffdf7;
          font-family: 'Space Mono', 'Courier New', monospace;
          font-size: 0.72rem;
          width: 100%;
        }

        .inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        a.home {
          font-family: 'VT323', monospace;
          font-size: 1.2rem;
          letter-spacing: 0.5px;
          color: #1a1a18;
          text-decoration: none;
        }

        a.home:hover { color: #2471a3; text-decoration: underline; }

        a.home em { color: #c0392b; font-style: normal; }

        .meta {
          color: #5a5650;
          font-size: 0.68rem;
          font-style: italic;
          text-align: right;
          line-height: 1.6;
        }

        .meta a { color: #2471a3; }

        .stamp {
          display: inline-block;
          border: 1.5px solid #c0392b;
          color: #c0392b;
          font-family: 'VT323', monospace;
          font-size: 0.7rem;
          padding: 1px 5px;
          letter-spacing: 2px;
          transform: rotate(-4deg);
          opacity: 0.7;
          margin-left: 0.5rem;
        }
      </style>

      <footer>
        <div class="inner">

          <a class="home" href="https://dailyvibeprojects.github.io">&#8592; dailyvibe<em>projects</em></a>

          <div class="meta">
            a <a href="https://dailyvibeprojects.github.io">dailyvibeprojects</a> thing
            <span class="stamp">VIBECODED</span>
            <br>
            <span style="opacity:0.6;">runs on coffee, beer &amp; questionable judgment</span>
          </div>

        </div>
      </footer>
    `;
  }
}

customElements.define('dvp-footer', DvpFooter);
