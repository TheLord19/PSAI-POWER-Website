"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export function useContactForm() {
  const [formStatus, setFormStatus] = useState<
    null | "success" | "error" | "loading"
  >(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormStatus("loading");

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      try {
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          signal: controller.signal,
        });

        if (!mountedRef.current) return;

        if (response.ok) {
          setFormStatus("success");
          (e.target as HTMLFormElement).reset();
        } else {
          setFormStatus("error");
        }
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (!mountedRef.current) return;
        console.error("Error submitting form:", err);
        setFormStatus("error");
      } finally {
        clearTimeout(timeout);
        if (mountedRef.current) {
          setTimeout(() => {
            if (mountedRef.current) setFormStatus(null);
          }, 5000);
        }
      }
    },
    [],
  );

  return { formStatus, handleSubmit };
}
