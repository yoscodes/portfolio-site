import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section mesh-bg"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="text-h1" style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>Contact</h2>
          <p className="text-body" style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
            採用のご相談・技術的な話題・サイトへのご意見、なんでも歓迎です。
          </p>
        </div>

        {/* ── Quick links for recruiters ── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}>
          <a
            href="https://github.com/yoscodes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ textDecoration: "none" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.64.63.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/>
            </svg>
            GitHub Profile
          </a>

          {/* PDF resume — update href when ready */}
          <a
            href="#"
            className="btn-ghost"
            style={{ textDecoration: "none", opacity: 0.5, pointerEvents: "none", cursor: "default" }}
            aria-disabled="true"
            title="準備中"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            職務経歴書 PDF
          </a>
        </div>

        <div style={{
          maxWidth: "520px",
          margin: "0 auto",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
        }}>
          <p style={{
            textAlign: "center",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
            marginBottom: "2rem",
            letterSpacing: "0.03em",
          }}>
            または、フォームから直接お送りください
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
}
