import { WaitlistForm } from "./WaitlistForm";
import { AnimatedCount } from "./AnimatedCount";
import { EarlyAccessBenefits } from "./EarlyAccessBenefits";

export function FinalCta({ waitlistCount, onJoined }) {
  return (
    <section className="final-cta" id="early-access">
      <EarlyAccessBenefits />
      <div className="final-inner" id="waitlist">
        <h2 className="waitlist-headline">
          <span className="waitlist-lead">Join</span>
          <AnimatedCount value={waitlistCount} />
          <span className="waitlist-tail">people waiting for Somni.</span>
        </h2>
        <WaitlistForm onJoined={onJoined} />
        <div className="cta-meta"><span>Free to join. No payment or card required.</span></div>
      </div>
    </section>
  );
}
