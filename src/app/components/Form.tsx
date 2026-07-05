"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Form() {
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const data = {
      name:    nameRef.current?.value,
      email:   emailRef.current?.value,
      message: messageRef.current?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        setStatus("success");
        if (nameRef.current)    nameRef.current.value    = "";
        if (emailRef.current)   emailRef.current.value   = "";
        if (messageRef.current) messageRef.current.value = "";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "520px", margin: "0 auto", width: "100%" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
        <div>
          <label htmlFor="name" className="form-label">お名前</label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="山田 太郎"
            required
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">メールアドレス</label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="example@email.com"
            required
            ref={emailRef}
          />
        </div>
      </div>

      <div style={{ marginBottom: "1.75rem" }}>
        <label htmlFor="message" className="form-label">コメント</label>
        <textarea
          id="message"
          className="form-input"
          placeholder="ご自由にどうぞ"
          rows={5}
          required
          ref={messageRef}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary"
          whileHover={status !== "loading" ? { scale: 1.04 } : {}}
          whileTap={status !== "loading" ? { scale: 0.96 } : {}}
          style={status === "loading" ? { opacity: 0.6, cursor: "not-allowed" } : {}}
        >
          {status === "loading" ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin 1s linear infinite" }}>
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              送信中…
            </>
          ) : "送信する"}
        </motion.button>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: "center", marginTop: "1.5rem", color: "#22c55e", fontSize: "0.9375rem", fontWeight: 500 }}
          >
            ✓ 送信が完了しました！ありがとうございました。
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: "center", marginTop: "1.5rem", color: "#ef4444", fontSize: "0.9375rem", fontWeight: 500 }}
          >
            送信に失敗しました。もう一度お試しください。
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </form>
  );
}
