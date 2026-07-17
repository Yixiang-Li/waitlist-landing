export function LearningVisual() {
  return (
    <div className="learning-visual" role="img" aria-label="A seven-night pattern becoming more personalized">
      <svg viewBox="0 0 620 330" aria-hidden="true">
        <defs>
          <linearGradient id="learningLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6d5dfc" />
            <stop offset=".55" stopColor="#43a8ff" />
            <stop offset="1" stopColor="#64e2c4" />
          </linearGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path className="learning-grid" d="M36 70H584M36 145H584M36 220H584" />
        <path className="learning-baseline" d="M36 190 C112 180 130 126 202 151 S312 210 372 155 S482 118 584 132" />
        <path className="learning-path" d="M36 229 C103 238 125 112 197 135 S309 200 370 155 S483 126 584 130" filter="url(#softGlow)" />
        {[36, 127, 218, 309, 400, 491, 584].map((x, index) => <circle key={x} cx={x} cy={[229, 124, 145, 193, 147, 132, 130][index]} r="8" />)}
      </svg>
      <div className="night-labels"><span>N1</span><span>N2</span><span>N3</span><span>N4</span><span>N5</span><span>N6</span><span>N7</span></div>
      <div className="learning-insight"><span>AFTER 7 NIGHTS</span><strong>More in sync</strong><small>Personalized to your rhythm</small></div>
    </div>
  );
}
