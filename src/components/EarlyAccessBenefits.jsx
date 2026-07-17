const benefits = [
  {
    title: "First to experience Somni.",
    body: "Get early access before the public launch.",
  },
  {
    title: "Closer to the build.",
    body: "Receive private previews and progress updates from Fullive.",
  },
  {
    title: "A voice in what comes next.",
    body: "Share feedback that helps shape the future of Somni.",
  },
];

export function EarlyAccessBenefits() {
  return (
    <div className="early-benefits" aria-labelledby="early-benefits-title">
      <div className="early-access-panel">
        <div className="early-copy">
          <h2 id="early-benefits-title">See it first.<br />Shape what’s next.</h2>
          <p>Join before launch for a closer look at Somni — and a chance to help make it better.</p>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article className="benefit-item" key={benefit.title}>
              <span className="benefit-mark" aria-hidden="true" />
              <div>
                <strong>{benefit.title}</strong>
                <p>{benefit.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
