export function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function IconGlyph({ name }: { name: string }) {
  return (
    <span className={`icon-glyph ${name}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function SignalDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className={`signal-divider ${tone}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function OperationsVisual() {
  const nodes = ["Support", "Security", "Systems", "Automation"];
  const checkpoints = ["Messy tools", "Secure hub", "Clear operations"];

  return (
    <div className="ops-visual" aria-label="Connected secure business operations visual" role="img">
      <div className="ops-status">
        <span />
        <strong>Live operations map</strong>
        <small>Support + security + systems</small>
      </div>
      <div className="ops-map">
        <div className="ops-boundary" />
        <div className="ops-core">
          <span>A</span>
          <strong>Aptpro</strong>
          <small>Operations hub</small>
        </div>
        {nodes.map((node, index) => (
          <div className={`ops-node node-${index + 1}`} key={node}>
            <span />
            <strong>{node}</strong>
          </div>
        ))}
        <svg className="ops-lines" viewBox="0 0 520 420" aria-hidden="true">
          <path d="M260 210 L124 104" />
          <path d="M260 210 L394 106" />
          <path d="M260 210 L115 315" />
          <path d="M260 210 L400 316" />
          <circle cx="260" cy="210" r="118" />
          <path className="signal-path main" d="M72 210 C150 150 213 150 260 210 C318 284 378 278 454 210" />
        </svg>
        <span className="signal-packet packet-one" />
        <span className="signal-packet packet-two" />
      </div>
      <div className="ops-checkpoints">
        {checkpoints.map((item, index) => (
          <span key={item}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            {item}
          </span>
        ))}
      </div>
      <div className="ops-console">
        <div>
          <small>Today&apos;s focus</small>
          <strong>Reliable, secure business operations</strong>
        </div>
        <ul>
          <li>Access reviewed before systems go live</li>
          <li>Support paths documented for staff</li>
          <li>Workflows shaped around real handovers</li>
        </ul>
      </div>
    </div>
  );
}
