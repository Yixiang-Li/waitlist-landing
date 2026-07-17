import { useState } from "react";

export function WaitlistForm({ onJoined }) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
    onJoined();
  }

  if (joined) {
    return (
      <div className="success-message" aria-live="polite">
        <span>✓</span><div><strong>You’re on the list.</strong><small>We’ll keep you posted on Somni.</small></div>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="waitlist-email">Email address</label>
      <input id="waitlist-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" autoComplete="email" required />
      <button type="submit">Join the waitlist <span aria-hidden="true">›</span></button>
    </form>
  );
}
