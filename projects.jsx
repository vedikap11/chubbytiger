/* Project data + horizontal carousel */

const PROJECTS = [
  {
    id: "P01",
    client: "Ollix",
    year: "2025",
    tags: ["Brand Identity", "Strategy"],
    blurb: "Ollix made Indian education smarter. We made sure it looked and sounded the part.",
    swatch: "#1F4D3A",
    accent: "#D7EACE",
  },
  {
    id: "P02",
    client: "Valam",
    year: "2026",
    tags: ["Brand Identity", "Art Direction"],
    blurb: "Repositioned a premium mixology brand. The world was already halfway in love with the flavours of India. We built the other half.",
    swatch: "#0C2340",
    accent: "#F4C03E",
  },
  {
    id: "P03",
    client: "Plotio",
    year: "2026",
    tags: ["Brand Identity", "Wayfinding"],
    blurb: "Real estate was already moving billions on WhatsApp. Plotio just made it official. We made sure everyone knew what that meant.",
    swatch: "#3C2E1F",
    accent: "#E4D4B8",
  },
  {
    id: "P04",
    client: "ArtworkStack",
    year: "2024",
    tags: ["Strategy", "Brand Identity"],
    blurb: "ArtworkStack had the clients, the product, and the track record. We gave it the architecture to grow on purpose.",
    swatch: "#B23B1E",
    accent: "#FFD9A8",
  },
  {
    id: "P05",
    client: "Currently Under Wraps",
    year: "2024",
    tags: ["Strategy"],
    blurb: "Institutional knowledge is irreplaceable. The systems that carry it don't have to be.",
    swatch: "#7A1F2B",
    accent: "#F0B7A4",
  },
  {
    id: "P06",
    client: "Currently Under Wraps",
    year: "2026",
    tags: ["Brand Strategy", "Naming", "Identity"],
    blurb: "Coming soon. A craft tradition with centuries of history and no commercial language. We're building the bridge.",
    swatch: "#2B3E50",
    accent: "#BEE3DB",
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <article
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: project.swatch, color: project.accent }}
    >
      <div className="project-card__head">
        <span className="project-card__id">{project.id}</span>
        <span className="project-card__year">{project.year}</span>
      </div>

      <div className="project-card__visual" aria-hidden="true">
        {/* Placeholder "case study" — stripes + chunky mark */}
        <div className="project-card__stripes" style={{ color: project.accent }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ opacity: 0.08 + i * 0.04 }} />
          ))}
        </div>
        <div
          className="project-card__mark"
          style={{
            transform: hovered ? "translate(-50%, -50%) scale(1.12) rotate(-4deg)" : "translate(-50%, -50%) scale(1) rotate(0)",
          }}
        >
          <span>{project.client.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
        </div>
        <div className="project-card__ribbon">{project.tags[0].toUpperCase()}</div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__client">{project.client}</h3>
        <p className="project-card__blurb">{project.blurb}</p>
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="project-card__foot">
        <span className="project-card__view">
          <span>VIEW CASE STUDY</span>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M1 6 H 16 M11 1 L 16 6 L 11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </article>
  );
}

function ProjectCarousel() {
  const scrollerRef = React.useRef(null);
  const [scrollPct, setScrollPct] = React.useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollPct(max > 0 ? el.scrollLeft / max : 0);
  };

  const nudge = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 520, behavior: "smooth" });
  };

  return (
    <section className="work" id="work">
      <div className="work__head">
        <div className="work__eyebrow">
          <span className="dot" /> SELECTED WORK — 2024 → 2026
        </div>
        <h2 className="work__title">
          Brands we <em>bit into.</em>
        </h2>
        <div className="work__nav">
          <button className="work__btn" onClick={() => nudge(-1)} aria-label="Previous">
            <svg width="18" height="14" viewBox="0 0 18 14"><path d="M17 7 H 2 M7 1 L 2 7 L 7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
          <button className="work__btn" onClick={() => nudge(1)} aria-label="Next">
            <svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7 H 16 M11 1 L 16 7 L 11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
        </div>
      </div>

      <div className="work__scroller" ref={scrollerRef} onScroll={onScroll}>
        <div className="work__track">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
          <div className="work__end">
            <div>
              <div className="work__end-kicker">END OF THE LINE.</div>
              <div className="work__end-title">Want your project<br/>in this list?</div>
              <a className="work__end-btn" href="#contact">Start a brief →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="work__progress">
        <div className="work__progress-track">
          <div className="work__progress-fill" style={{ width: `${Math.max(8, scrollPct * 100)}%` }} />
        </div>
        <div className="work__progress-label">
          SCROLL — OR DRAG — {String(Math.round(scrollPct * (PROJECTS.length))).padStart(2, "0")}/{String(PROJECTS.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PROJECTS, ProjectCard, ProjectCarousel });
