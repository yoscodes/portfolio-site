"use client";

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.855L2.25 2.25h6.988l4.255 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

function GitHubFooterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.64.63.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/>
    </svg>
  );
}

function ZennIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 88 88" fill="currentColor" aria-hidden="true">
      <path d="M0 0h88v88H0z" fill="none"/>
      <path d="M9.5 73L38 15h12L21.5 73H9.5zM38.5 73l28.5-58H79L50.5 73H38.5zM68 73l10-20.5 10 20.5H68z"/>
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { icon: <XIcon />,           href: undefined,                     label: "X (Twitter)" },
    { icon: <GitHubFooterIcon />, href: "https://github.com/yoscodes", label: "GitHub" },
    { icon: <ZennIcon />,        href: "https://zenn.dev/4o7i1",      label: "Zenn" },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.875rem", padding: "1.5rem clamp(1.25rem, 5vw, 3rem)" }}
      >
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {socials.map(({ icon, href, label }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.2s, transform 0.2s",
                  display: "flex",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {icon}
              </a>
            ) : (
              <span
                key={label}
                aria-label={label}
                style={{ color: "var(--text-muted)", display: "flex", cursor: "default" }}
              >
                {icon}
              </span>
            )
          )}
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          &copy; 2025 Yosei Suzuki. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
