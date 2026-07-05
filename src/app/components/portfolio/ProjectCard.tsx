"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  description: string[];
  tags?: string[];
  image?: string;
  link?: string;
  githubLink?: string;
  isReady?: boolean;
  icon?: ReactNode;
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  githubLink,
  isReady = true,
  icon,
}: ProjectCardProps) {
  return (
    <motion.div className="card" variants={itemVariants} style={{ display: "flex", flexDirection: "column" }}>
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "14px 14px 0 0" }}>
        {isReady && image ? (
          <>
            <Image
              src={image}
              alt={title}
              width={600}
              height={338}
              style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
              priority
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45))",
              pointerEvents: "none",
            }}/>
          </>
        ) : (
          <div style={{
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-elevated)",
            color: "var(--text-muted)",
            fontSize: "0.875rem",
          }}>
            準備中...
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1.375rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
          <div style={{
            width: "32px", height: "32px",
            borderRadius: "8px",
            background: "var(--accent-soft)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {icon ?? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            )}
          </div>
          <h3 className="text-h3" style={{ color: "var(--text-primary)" }}>{title}</h3>
        </div>

        {/* Description */}
        <ul style={{ flex: 1, marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          {description.map((item, i) => (
            <li
              key={i}
              className="text-small"
              style={{
                color: "var(--text-secondary)",
                paddingLeft: "1rem",
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>›</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        {tags && tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1rem" }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: "var(--accent-soft)",
                color: "var(--accent)",
                letterSpacing: "0.03em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "auto" }}>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)",
                textDecoration: "none", transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              記事を見る
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "auto",
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              GitHub
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.64.63.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
