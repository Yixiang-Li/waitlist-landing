export function RhythmVisual() {
  return (
    <div className="rhythm-visual" role="img" aria-label="Sound, light and scent working together from evening to morning">
      <div className="visual-topline"><span>YOUR WHOLE-NIGHT RHYTHM</span><strong>10 PM — 7 AM</strong></div>
      <div className="rhythm-chart">
        <svg viewBox="0 0 620 300" aria-hidden="true">
          <defs>
            <linearGradient id="soundLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#a18cff" />
              <stop offset="1" stopColor="#7568ff" />
            </linearGradient>
            <linearGradient id="lightLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#b85d76" />
              <stop offset="1" stopColor="#f2bd7e" />
            </linearGradient>
            <linearGradient id="scentLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#4f9ca9" />
              <stop offset="1" stopColor="#70d5c5" />
            </linearGradient>
            <filter id="rhythmGlow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path className="rhythm-grid" d="M32 62H588M32 150H588M32 238H588" />
          <path className="rhythm-phase" d="M218 35V255M404 35V255" />
          <path className="rhythm-line rhythm-line--sound" d="M32 92 C104 80 132 126 206 137 S328 116 402 128 S518 159 588 153" filter="url(#rhythmGlow)" />
          <path className="rhythm-line rhythm-line--scent" d="M32 190 C106 166 145 184 210 173 S320 146 404 158 S512 148 588 119" filter="url(#rhythmGlow)" />
          <path className="rhythm-line rhythm-line--light" d="M32 224 C120 232 162 214 222 218 S340 229 404 203 S510 111 588 71" filter="url(#rhythmGlow)" />
        </svg>
        <div className="rhythm-legend" aria-hidden="true">
          <span><i className="legend-dot legend-dot--sound" />Sound</span>
          <span><i className="legend-dot legend-dot--light" />Light</span>
          <span><i className="legend-dot legend-dot--scent" />Scent</span>
        </div>
      </div>
      <div className="rhythm-footer"><span>Wind down</span><span>Deep night</span><span>Wake well</span></div>
    </div>
  );
}
