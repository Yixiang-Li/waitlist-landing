export function Hero() {
  const assets = `${import.meta.env.BASE_URL}assets`;

  return (
    <section className="hero" id="top">
      <picture className="hero-picture">
        <source media="(max-width: 700px)" srcSet={`${assets}/somni-hero-story-mobile-v2.png`} />
        <img src={`${assets}/somni-hero-story-wide-v2.png`} alt="A person sleeping peacefully with Somni on the bedside table" />
      </picture>
      <div className="hero-gradient" />
      <a className="hero-brand" href="#top" aria-label="Fullive home">
        <img src={`${assets}/fullive-mark-dark.png`} alt="" />
        <span>FULLIVE</span>
      </a>
      <div className="hero-copy">
        <div className="product-lockup">SOMNI</div>
        <h1>Sleep, cared for.<br />All night long.</h1>
        <p>An AI-powered bedside sleep companion that learns and adapts through the night.</p>
        <div className="hero-actions">
          <a className="primary-pill" href="#waitlist">Join the waitlist <span aria-hidden="true">›</span></a>
          <small>Free early access. No payment required.</small>
        </div>
      </div>
    </section>
  );
}
