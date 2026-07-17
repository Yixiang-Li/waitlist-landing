export function RhythmVisual() {
  return (
    <div className="rhythm-visual" role="img" aria-label="Sound, light and scent working together from evening to morning">
      <div className="visual-topline"><span>ONE WHOLE-NIGHT RHYTHM</span><strong>10 PM — 7 AM</strong></div>
      <div className="rhythm-orbit">
        <div className="rhythm-track" />
        <div className="cue cue--sound"><span className="cue-icon">≈</span><strong>Sound</strong><small>Settle</small></div>
        <div className="cue cue--light"><span className="cue-icon">◐</span><strong>Light</strong><small>Restore</small></div>
        <div className="cue cue--scent"><span className="cue-icon">◌</span><strong>Scent</strong><small>Wake</small></div>
      </div>
      <div className="rhythm-footer"><span>Wind down</span><span>Deep night</span><span>Wake well</span></div>
    </div>
  );
}
