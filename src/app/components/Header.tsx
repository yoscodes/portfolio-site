"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5"/>
      <line x1="12" y1="2"    x2="12" y2="4.5"/>
      <line x1="12" y1="19.5" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22"   x2="5.99" y2="5.99"/>
      <line x1="18.01" y1="18.01" x2="19.78" y2="19.78"/>
      <line x1="2"    y1="12" x2="4.5"  y2="12"/>
      <line x1="19.5" y1="12" x2="22"   y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.99" y2="18.01"/>
      <line x1="18.01" y1="5.99"  x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Header() {
  const [isDark,   setIsDark]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "all 0.3s ease" }}
      className={scrolled ? "header-glass" : ""}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* ── Logo ── */}
        <a href="#home" aria-label="ホームへ戻る" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <rect width="30" height="30" rx="8" style={{ fill: "var(--accent-soft)" }}/>
            <path d="M7 10l5 5-5 5M14 20h9" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Yosei Suzuki
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }} aria-label="Main Navigation">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="テーマ切り替え"
            style={{
              display: "flex", alignItems: "center", gap: "0.375rem",
              padding: "0.4rem 0.875rem",
              borderRadius: "9999px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              fontSize: "0.8125rem", fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s",
              fontFamily: "var(--font-body)",
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
            {isDark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* ── Mobile Controls ── */}
        <div className="flex md:hidden" style={{ alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={toggleTheme}
            aria-label="テーマ切り替え"
            style={{ background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", padding: "0.5rem", display: "flex" }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", padding: "0.5rem", display: "flex" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden header-glass" style={{ borderTop: "1px solid var(--border)" }}>
          <nav className="container" style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1rem", paddingBottom: "1.25rem" }}>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" onClick={() => setMenuOpen(false)} style={{ fontSize: "1.0625rem" }}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
