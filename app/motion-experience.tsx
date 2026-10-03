"use client";

import { useEffect, useState } from "react";

export default function MotionExperience() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const sync = () => root.classList.toggle("motion-paused", paused || preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => { preference.removeEventListener("change", sync); root.classList.remove("motion-paused"); };
  }, [paused]);

  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>("main section[id] h2, .service-card, .project-card, #about p, #contact form");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${index % 2 * 90}ms`);
      observer.observe(target);
    });
    let frame = 0;
    const update = () => {
      const distance = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${distance > 0 ? window.scrollY / distance : 0}`);
      root.classList.toggle("has-scrolled", window.scrollY > 30);
      frame = 0;
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    const cards = document.querySelectorAll<HTMLElement>(".service-card, .project-card");
    const illuminate = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || root.classList.contains("motion-paused")) return;
      const card = event.currentTarget as HTMLElement;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--light-x", `${event.clientX - box.left}px`);
      card.style.setProperty("--light-y", `${event.clientY - box.top}px`);
    };
    cards.forEach((card) => card.addEventListener("pointermove", illuminate));
    const menu = document.querySelector<HTMLButtonElement>('button[aria-label="Open menu"]');
    const nav = menu?.closest("nav");
    const links = nav?.querySelector<HTMLElement>("div.hidden.items-center");
    if (links) { links.id = "primary-navigation"; links.classList.add("primary-navigation"); }
    menu?.setAttribute("aria-controls", "primary-navigation");
    menu?.setAttribute("aria-expanded", "false");
    const close = () => {
      nav?.classList.remove("menu-open");
      menu?.setAttribute("aria-expanded", "false");
      menu?.setAttribute("aria-label", "Open menu");
    };
    const toggle = () => {
      const open = nav?.classList.toggle("menu-open") ?? false;
      menu?.setAttribute("aria-expanded", String(open));
      menu?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") { close(); menu?.focus(); } };
    menu?.addEventListener("click", toggle);
    links?.addEventListener("click", close);
    document.addEventListener("keydown", key);
    return () => {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove("reveal", "is-visible"));
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
      cards.forEach((card) => card.removeEventListener("pointermove", illuminate));
      menu?.removeEventListener("click", toggle);
      links?.removeEventListener("click", close);
      document.removeEventListener("keydown", key);
    };
  }, []);

  return <>
    <div className="reading-progress" aria-hidden="true" />
    <button className="motion-control" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
      <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span> {paused ? "Play motion" : "Pause motion"}
    </button>
  </>;
}

export function OrbitArtwork() {
  return <div className="orbit-art" aria-hidden="true">
    <div className="orbit-halo" />
    <div className="orbit-system">
      <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
      <div className="orbit-core"><span>✳</span></div>
      <div className="orbit-satellite"><i /></div>
    </div>
    <span className="orbit-note note-one">STRATEGY + DESIGN</span>
    <span className="orbit-note note-two">CODE → POSSIBILITY</span>
    <span className="orbit-coordinate">LEVION / IDEAS IN ORBIT</span>
  </div>;
}

export function CreativeMarquee() {
  const words = ["Thoughtfully designed", "Expertly engineered", "Built to move you"];
  return <div className="creative-marquee" aria-label={words.join(". ")}><div className="marquee-track" aria-hidden="true">
    {[0, 1].map((copy) => <div className="marquee-group" key={copy}>{words.map((word) => <span key={word}>{word}<b>✳</b></span>)}</div>)}
  </div></div>;
}
