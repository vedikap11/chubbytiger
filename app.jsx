/* global React, ReactDOM, TigerProwl, TigerSit, TigerLeap, TigerMark, ProjectCarousel, PROJECTS */
/* global TweaksPanel, useTweaks, TweakSection, TweakSlider, TweakToggle, TweakText, TweakColor, TweakRadio */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgColor": "#FF4D1C",
  "headline": "Brands with a little bite.",
  "tigerCount": 3,
  "customCursor": true,
  "tonedDown": false
} /*EDITMODE-END*/;

/* -------- Custom cursor (paw) -------- */
function PawCursor({ enabled }) {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const t = e.target;
      setActive(!!(t && t.closest && t.closest("[data-cursor='active']")));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      className="paw-cursor"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${active ? 1.5 : 1})`
      }}>
      
      <svg viewBox="0 0 40 40" width="40" height="40">
        <ellipse cx="20" cy="26" rx="11" ry="9" fill="#1A1512" />
        <circle cx="10" cy="15" r="4.5" fill="#1A1512" />
        <circle cx="20" cy="11" r="4.5" fill="#1A1512" />
        <circle cx="30" cy="15" r="4.5" fill="#1A1512" />
        <circle cx="36" cy="24" r="3.5" fill="#1A1512" />
      </svg>
    </div>);

}

/* -------- Nav -------- */
function Nav() {
  return (
    <nav className="nav">
      <a className="nav__brand" href="#top" data-cursor="active">
        <TigerMark style={{ width: 38, height: 38 }} />
        <span style={{ color: "rgb(245, 228, 200)" }}>CHUBBY TIGER</span>
      </a>
      <ul className="nav__links">
        <li><a href="#work" data-cursor="active">Work</a></li>
        <li><a href="#about" data-cursor="active">About</a></li>
        <li><a href="#services" data-cursor="active">Services</a></li>
      </ul>
      <a className="nav__cta" href="#contact" data-cursor="active">
        CONTACT US
        <span className="nav__cta-arrow">→</span>
      </a>
    </nav>);

}

/* -------- Hero -------- */
function Hero({ headline, tigerCount }) {
  const heroRef = React.useRef(null);
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });

  React.useEffect(() => {
    const onMove = (e) => {
      const el = heroRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setMouse({
        x: Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)),
        y: Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Decide which tigers to render based on count
  const tigers = [
  { Comp: TigerProwl, scale: 0.55, rotate: -2, yBase: 0, aspect: 400 / 300 },
  { Comp: TigerSit, scale: 0.75, rotate: 0, yBase: -10, aspect: 300 / 360 },
  { Comp: TigerLeap, scale: 1.0, rotate: 3, yBase: 10, aspect: 440 / 280 }];

  const visible = tigers.slice(0, tigerCount);

  return (
    <header className="hero" ref={heroRef} id="top">
      <div className="hero__kicker">
        <span className="dot" /> EST. 2026 — SOUTH AND SOUTH-EAST ASIA
      </div>

      <h1 className="hero__headline">{headline}</h1>

      <div className="hero__sub">
        <span className="hero__sub-line" />
        <p>
          A brand-identity &amp; business-strategy studio for companies that refuse to be bland.
          We come in hungry, leave you dangerous.
        </p>
      </div>

      <div className="hero__tigers" style={{ gridTemplateColumns: `repeat(${visible.length}, 1fr)` }}>
        {visible.map((t, i) => {
          const dx = (mouse.x - 0.5) * 24 * (i + 1) * 0.6;
          const dy = (mouse.y - 0.5) * 18 * (i + 1) * 0.6;
          return (
            <div
              key={i}
              className="hero__tiger-wrap"
              style={{
                transform: `translate(${dx}px, ${dy + t.yBase}px) scale(${t.scale}) rotate(${t.rotate}deg)`
              }}>
              
              <t.Comp className="hero__tiger" />
            </div>);

        })}
      </div>

      {/* Bottom row */}
      <div className="hero__foot">
        <div className="hero__foot-item">
          <span className="hero__foot-num">01</span>
          <span>BRAND IDENTITY</span>
        </div>
        <div className="hero__foot-item">
          <span className="hero__foot-num">02</span>
          <span>BUSINESS STRATEGY</span>
        </div>
        <div className="hero__foot-item">
          <span className="hero__foot-num">03</span>
          <span>NAMING &amp; POSITIONING</span>
        </div>
        <div className="hero__foot-item hero__foot-scroll">
          SCROLL
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1 V 12 M2 8 L 7 13 L 12 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </header>);

}

/* -------- Marquee -------- */
function Marquee() {
  const items = [
  "BRAND IDENTITY",
  "BUSINESS STRATEGY",
  "POSITIONING",
  "NAMING",
  "ART DIRECTION",
  "PACKAGING",
  "CAMPAIGN",
  "VERBAL IDENTITY"];

  const line = items.concat(items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {line.map((s, i) =>
        <span key={i} className="marquee__item">
            {s} <span className="marquee__star">✦</span>
          </span>
        )}
      </div>
    </div>);

}

/* -------- About / Manifesto -------- */
function About() {
  const stats = [
  { n: "114", l: "Brands built,\nrebuilt, rescued" },
  { n: "07", l: "Years\nin the jungle" },
  { n: "$2.4B", l: "Of client\nrevenue moved" },
  { n: "03", l: "Full-time\ntigers (plus a dog)" }];


  return (
    <section className="about" id="about">
      <div className="about__pair">
        <div className="about__eyebrow">
          <span className="dot" /> ABOUT THE STUDIO
        </div>
        <h2 className="about__title">
          We don't <em>do</em> bland.<br />
          We <em>eat</em> bland.
        </h2>
      </div>

      <div className="about__body">
        <p className="about__lede">
          Chubby Tiger is a three-person studio that punches above its weight class. We handle
          the strategic thinking and the bold visual execution — the stuff most agencies
          split into two invoices.
        </p>
        <p className="about__para">
          We take on six engagements a year. We say no a lot. When we say yes, we mean it,
          and we show up with teeth. If that sounds like overkill for your project —
          it probably is. If it sounds like <em>exactly</em> what you need, pull up a chair.
        </p>
        <a className="about__link" href="#contact" data-cursor="active">
          MEET THE TIGERS →
        </a>
      </div>

      <div className="about__stats">
        {stats.map((s, i) =>
        <div key={i} className="about__stat">
            <div className="about__stat-n">{s.n}</div>
            <div className="about__stat-l">{s.l}</div>
          </div>
        )}
      </div>
    </section>);

}

/* -------- Services -------- */
function Services() {
  const rows = [
  { n: "01", name: "BRAND IDENTITY", detail: "Logos, systems, type, color, voice. The whole costume." },
  { n: "02", name: "BUSINESS STRATEGY", detail: "Positioning, pricing, portfolio. Where you play and why you win." },
  { n: "03", name: "NAMING", detail: "Words that stick. Trademarkable, pronounceable, memorable." },
  { n: "04", name: "PACKAGING", detail: "Shelf presence. The thing that earns the pick-up." },
  { n: "05", name: "ART DIRECTION", detail: "Photography, illustration, motion. Cohesion across every surface." },
  { n: "06", name: "LAUNCH SUPPORT", detail: "Going-to-market with you, not at you. Through week 12." }];


  const [hovered, setHovered] = React.useState(null);

  return (
    <section className="services" id="services">
      <div className="services__head">
        <div className="services__eyebrow">
          <span className="dot" /> WHAT WE DO
        </div>
        <h2 className="services__title">Six things,<br />done properly.</h2>
      </div>

      <ul className="services__list">
        {rows.map((r, i) =>
        <li
          key={r.n}
          className={`services__row ${hovered === i ? "is-hovered" : ""} ${hovered !== null && hovered !== i ? "is-dim" : ""}`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          data-cursor="active">
          
            <span className="services__num">{r.n}</span>
            <span className="services__name">{r.name}</span>
            <span className="services__detail">{r.detail}</span>
            <span className="services__arrow">→</span>
          </li>
        )}
      </ul>
    </section>);

}

/* -------- Contact -------- */
function Contact() {
  const [budget, setBudget] = React.useState("$50–100K");
  const [service, setService] = React.useState(null);
  const services = ["Identity", "Strategy", "Naming", "All of it"];
  const budgets = ["< $50K", "$50–100K", "$100–250K", "$250K+"];

  return (
    <section className="contact" id="contact">
      <div className="contact__grid">
        <div className="contact__left">
          <div className="contact__eyebrow">
            <span className="dot" /> START A PROJECT
          </div>
          <h2 className="contact__title">
            Ready to get<br />a little <em>bitey?</em>
          </h2>
          <p className="contact__blurb">
            We read every brief ourselves (no form-filter bots). Expect a response in 48h
            during studio weeks, 72h during bear-hug season.
          </p>

          <div className="contact__details">
            <div>
              <div className="contact__detail-label">EMAIL</div>
              <a className="contact__detail-val" href="mailto:hello@chubbytiger.co" data-cursor="active">hello@chubbytiger.co</a>
            </div>
            <div>
              <div className="contact__detail-label">STUDIO</div>
              <div className="contact__detail-val">ONLINE</div>
            </div>
            <div>
              <div className="contact__detail-label">INSTAGRAM</div>
              <a className="contact__detail-val" href="#" data-cursor="active">@chubbytiger.co</a>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={(e) => {e.preventDefault();alert("Thanks — we'll be in touch.");}}>
          <label className="contact__field">
            <span>YOUR NAME</span>
            <input type="text" placeholder="Jane Appleseed" />
          </label>
          <label className="contact__field">
            <span>COMPANY</span>
            <input type="text" placeholder="Big plans inc." />
          </label>
          <label className="contact__field">
            <span>EMAIL</span>
            <input type="email" placeholder="jane@company.com" />
          </label>

          <div className="contact__field">
            <span>WHAT DO YOU NEED?</span>
            <div className="contact__chips">
              {services.map((s) =>
              <button
                type="button"
                key={s}
                className={`chip ${service === s ? "chip--on" : ""}`}
                onClick={() => setService(s)}
                data-cursor="active">
                
                  {s}
                </button>
              )}
            </div>
          </div>

          <div className="contact__field">
            <span>BUDGET</span>
            <div className="contact__chips">
              {budgets.map((b) =>
              <button
                type="button"
                key={b}
                className={`chip ${budget === b ? "chip--on" : ""}`}
                onClick={() => setBudget(b)}
                data-cursor="active">
                
                  {b}
                </button>
              )}
            </div>
          </div>

          <label className="contact__field">
            <span>TELL US ABOUT IT</span>
            <textarea rows="4" placeholder="The honest version is always best."></textarea>
          </label>

          <button type="submit" className="contact__submit" data-cursor="active">
            SEND IT →
          </button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer__left">
          <TigerMark style={{ width: 48, height: 48 }} />
          <div>
            <div className="footer__brand">CHUBBY TIGER</div>
            <div className="footer__tag">© 2026 — ALL TEETH, NO FILLER</div>
          </div>
        </div>
        <div className="footer__right">
          <a href="#" data-cursor="active">INSTAGRAM</a>
          <a href="#" data-cursor="active">LINKEDIN</a>
          <a href="#" data-cursor="active">ARE.NA</a>
        </div>
      </footer>
    </section>);

}

/* -------- App -------- */
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--bg", tw.bgColor);
    if (tw.customCursor) document.body.classList.add("has-paw");else
    document.body.classList.remove("has-paw");
  }, [tw.bgColor, tw.customCursor]);

  return (
    <div className={`site ${tw.tonedDown ? "site--toned" : ""}`}>
      <PawCursor enabled={tw.customCursor} />
      <Nav />
      <Hero headline={tw.headline} tigerCount={tw.tigerCount} />
      <Marquee />
      <ProjectCarousel />
      <About />
      <Services />
      <Contact />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Vibe">
          <TweakColor label="Background" value={tw.bgColor} onChange={(v) => setTweak({ bgColor: v })}
          presets={["#FF4D1C", "#E8462A", "#F4C03E", "#1F4D3A", "#0C2340", "#F5E4C8"]} />
          <TweakToggle label="Toned-down mode" value={tw.tonedDown} onChange={(v) => setTweak({ tonedDown: v })} />
        </TweakSection>

        <TweakSection title="Hero">
          <TweakText label="Headline" value={tw.headline} onChange={(v) => setTweak({ headline: v })} />
          <TweakRadio label="Tigers in hero" value={tw.tigerCount}
          options={[{ value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }]}
          onChange={(v) => setTweak({ tigerCount: v })} />
        </TweakSection>

        <TweakSection title="Cursor">
          <TweakToggle label="Paw cursor" value={tw.customCursor} onChange={(v) => setTweak({ customCursor: v })} />
        </TweakSection>
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);