// ===== EDIT YOUR CONTENT HERE =====
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";
// [name, logo path under DEV] — logo omitted = text-only tile
const skills = {
  Languages: [["Python","python/python-original.svg"],["TypeScript","typescript/typescript-original.svg"],["JavaScript","javascript/javascript-original.svg"]],
  Frameworks: [["React","react/react-original.svg"],["Next.js","nextjs/nextjs-original.svg"],["Node.js","nodejs/nodejs-original.svg"],["Express.js","express/express-original.svg"],["FastAPI","fastapi/fastapi-original.svg"]],
  Databases: [["PostgreSQL","postgresql/postgresql-original.svg"],["MySQL","mysql/mysql-original.svg"],["Redis","redis/redis-original.svg"],["DynamoDB","amazonwebservices/amazonwebservices-original-wordmark.svg"],["Prisma","prisma/prisma-original.svg"]],
  "Cloud & DevOps": [["AWS","amazonwebservices/amazonwebservices-original-wordmark.svg"],["Docker","docker/docker-original.svg"],["Git","git/git-original.svg"],["GitHub Actions","github/github-original.svg"],["S3","amazonwebservices/amazonwebservices-original-wordmark.svg"]],
  "AI/ML": [["LLM APIs"],["LangGraph"],["RAG pipelines"],["Vector embeddings"],["Semantic search"]],
  Testing: [["Jest","jest/jest-plain.svg"],["Vitest","vitest/vitest-original.svg"]],
};

const experience = [
  { when: "Feb 2026 – Present", role: "Member", org: "E-Cell, AIT Pune", desc: "Helped plan and run events including Unnati 6.0 and Chapters 2026 (with E-Cell IIT Bombay, 70+ teams)." },
  { when: "2026", role: "Finalist", org: "VentureX Hackathon, IIT (ISM) Dhanbad", desc: "Top 10 of 1000+ registered teams; presented at the offline final round." },
  { when: "2025 – Present", role: "B.Tech IT Student", org: "Army Institute of Technology, Pune", desc: "Focused on UI/UX, software development and AI." },
];

const projects = [
  { title: "Sakshi", desc: "Flutter mobile app built at a hackathon at DTU, with an \"Ask Sakshi\" chat about your own numbers. Shipped a demo build for the judges.", tags: ["Flutter", "Dart", "Kotlin"], href: "https://github.com/hselin-iar/sakshi" },
  { title: "Cyclone AI", desc: "AI platform for tropical cyclone detection, intensity estimation and track forecasting over the North Indian Ocean from INSAT satellite data.", tags: ["Python", "PyTorch", "Docker"], href: "https://github.com/priyamraj201-art/CyclonePredictor" },
  { title: "Nakabandi", desc: "Prototype that predicts where fraud cash-out is likely to happen so banks and police can act in time. I built the React and Vite web dashboard.", tags: ["React", "Vite", "Python"], href: "https://github.com/hselin-iar/nakabandi" },
  { title: "Mehfil", desc: "Hackathon project. Description coming soon.", tags: ["Hackathon"], href: "https://github.com/priyamraj201-art" },
  { title: "IBVP", desc: "Intelligent Border Video Analytics Platform with a security-focused architecture.", tags: ["Python", "Video analytics"], href: "https://github.com/priyamraj201-art/IBVP-Intelligent-Border-Video-Analytics-Platform-Security-Architecture-" },
  { title: "Ignite 2026 website", desc: "Contributed the draggable perks cards and domain coverflow for the E-Cell Ignite site.", tags: ["React", "Motion"], href: "https://github.com/I-E-Cell/ignite-2026" },
  { title: "TalentScout AI", desc: "AI-powered talent and resume analysis platform built at the Ignite hackathon by E-Cell AIT Pune. Scans resumes and surfaces candidate insights automatically.", tags: ["TypeScript", "AI", "Hackathon"], href: "https://github.com/priyamraj201-art/TalentScoutAI" },
  { title: "Screen Assistant", desc: "Agentic Chrome extension that reads live page content, sends it to Gemini AI, and proposes actions — fill fields, click buttons — that you confirm before anything changes.", tags: ["JavaScript", "Chrome Extension", "Gemini AI"], href: "https://github.com/priyamraj201-art/screen-assistance" },
];
// Design works: put images in the design/ folder and set img to e.g. "design/ui-1.png".
// Leave img empty to show a placeholder tile.
const designs = [
  { title: "Kawasaki Ninja App UI", type: "UI / UX", img: "design/app-ui.png", tool: "Figma", tall: true },
  { title: "Startup Saga Expo Poster", type: "Event Poster", img: "design/event-poster-1.png", tool: "Canva", tall: true },
  { title: "Startup Saga V Poster", type: "Event Poster", img: "design/event-poster.png", tool: "Canva", tall: true },
  { title: "Startup Saga Brochure", type: "Brochure / Deck", img: "design/brochure.png", tool: "Figma", wide: true },
  { title: "Brand Identity", type: "Branding", img: "design/brand-identity.png", tool: "Figma", square: true },
];
// ==================================

const $ = (s) => document.querySelector(s);

$("#skills-list").innerHTML = Object.entries(skills).map(([group, items]) => `
  <div class="skillgroup"><h3>${group}</h3>
    <div class="s-tools">${items.map(([n, f]) => `<span class="s-tool">${f ? `<img src="${DEV}${f}" alt="" width="30" height="30" loading="lazy">` : ""}${n}</span>`).join("")}</div>
  </div>`).join("");

$("#exp-list").innerHTML = experience.map((e) => `
  <div class="exp reveal">
    <div class="when">${e.when}</div>
    <div><h4>${e.org}</h4><div>${e.role}</div><p>${e.desc}</p></div>
  </div>`).join("");

$("#project-list").innerHTML = projects.map((p, i) => `
  <a class="project reveal" href="${p.href}">
    <span class="num">0${i + 1}</span>
    <h4>${p.title} ↗</h4>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
  </a>`).join("");

// theme toggle
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
$("#theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});

// design gallery
$("#design-list").innerHTML = designs.map((d, i) => `
  <figure class="design reveal${d.wide ? " wide" : ""}${d.tall ? " tall" : ""}${d.square ? " square" : ""}" data-i="${i}" tabindex="0">
    <div class="design-img${d.img ? "" : " ph ph" + (i % 4)}">${d.img ? `<img src="${d.img}" alt="${d.title}" loading="lazy">` : `<span>${d.title}</span>`}</div>
    <figcaption><b>${d.title}</b><span>${d.type} · ${d.tool}</span></figcaption>
  </figure>`).join("");

const lb = $("#lightbox");
const openLb = (d) => {
  if (!d.img) return;
  lb.querySelector("img").src = d.img;
  lb.querySelector("p").textContent = d.title + " — " + d.type;
  lb.hidden = false;
};
document.querySelectorAll(".design").forEach((el) => {
  const open = () => openLb(designs[+el.dataset.i]);
  el.addEventListener("click", open);
  el.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
});
lb.addEventListener("click", () => (lb.hidden = true));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

// ===== motion: custom cursor, hero light, intro, scroll reveals (GSAP + Lenis) =====
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const bar = $(".nav");
  const onScroll = (y) => {
    bar.dataset.stuck = y > 24 ? "1" : "0";
    document.body.dataset.far = y > 900 ? "1" : "0";
  };
  onScroll(window.scrollY);

  // cursor dot that eases toward the pointer
  const cur = $("#cursor");
  if (cur && fine) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX; ty = e.clientY;
      cur.classList.add("on");
      const t = e.target;
      const precise = t.closest && t.closest("a,input,textarea,.design");
      const big = !precise && t.closest && t.closest("button");
      cur.classList.toggle("precise", !!precise);
      cur.classList.toggle("big", !!big);
    });
    document.documentElement.addEventListener("pointerleave", () => cur.classList.remove("on"));
    const loop = () => {
      x += (tx - x) * 0.35; y += (ty - y) * 0.35;
      cur.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  // split the tagline into words for the intro
  const split = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "word";
          const i = document.createElement("span"); i.textContent = part;
          w.appendChild(i); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) split(n);
    });
  };
  const tagline = $(".tagline");
  if (tagline) split(tagline);

  const ok = !reduce && window.gsap && window.ScrollTrigger;
  addEventListener("scroll", () => onScroll(window.scrollY), { passive: true });
  if (!ok) return;

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("motion");

  // smooth scroll
  if (window.Lenis) {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    lenis.on("scroll", (e) => { ScrollTrigger.update(); onScroll(e.scroll); });
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const cs = getComputedStyle(target);
      lenis.scrollTo(target, { offset: (parseFloat(cs.scrollMarginTop) || 0) + (parseFloat(cs.paddingTop) || 0) - bar.offsetHeight - 12 });
    }));
  }

  // hero: yellow light follows the pointer, grid drifts and shifts against it
  const hero = $(".hero"), light = $(".hero__light"), lines = $(".hero__lines"), glow = $(".hero__glow");
  const GRID = 70;
  if (fine && hero && light) {
    const p = { x: 0, y: 0 }, s = { x: 0, y: 0 };
    let seen = false, dx = 0, dy = 0, last = performance.now();
    addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      const r = hero.getBoundingClientRect();
      if (e.clientY > r.bottom) { light.dataset.on = "0"; return; }
      p.x = e.clientX - r.left; p.y = e.clientY - r.top;
      if (!seen) { s.x = p.x; s.y = p.y; seen = true; }
      light.dataset.on = "1";
    }, { passive: true });
    const tick = () => {
      s.x += (p.x - s.x) * 0.11; s.y += (p.y - s.y) * 0.11;
      light.style.setProperty("--sx", s.x.toFixed(1) + "px");
      light.style.setProperty("--sy", s.y.toFixed(1) + "px");
      const now = performance.now(), dt = Math.min((now - last) / 1000, 0.05); last = now;
      const a = (now / 1000) * 0.09;
      dx = (dx + 44 * Math.cos(a) * dt) % GRID; dy = (dy + 44 * Math.sin(a) * dt) % GRID;
      let lx = 0, ly = 0, gx = 0, gy = 0;
      if (seen) {
        const r = hero.getBoundingClientRect();
        const nx = s.x / Math.max(r.width, 1) - 0.5, ny = s.y / Math.max(r.height, 1) - 0.5;
        lx = -(46 * nx); ly = -(30 * ny); gx = 26 * nx; gy = 16 * ny;
      }
      if (lines) lines.style.transform = `translate3d(${(lx + dx).toFixed(1)}px, ${(ly + dy).toFixed(1)}px, 0)`;
      if (glow) glow.style.translate = `${(gx + 18 * Math.cos(a)).toFixed(1)}px ${(gy + 12 * Math.sin(a)).toFixed(1)}px`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // intro
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".grid-bg", { autoAlpha: 0, duration: 1.1 }, 0)
    .from(".hero .eyebrow", { y: 14, autoAlpha: 0, duration: 0.6 }, 0.1)
    .from(".name__line > span", { yPercent: 108, duration: 0.95, stagger: 0.08 }, 0.15)
    .from(".word > span", { yPercent: 105, duration: 0.7, stagger: 0.035 }, 0.5)
    .from(".hero-actions", { y: 18, autoAlpha: 0, duration: 0.6 }, 0.95);

  if (!fine) gsap.to(".hero__lines", { x: GRID, y: GRID, duration: 9, ease: "none", repeat: -1 });
  gsap.to(".hero__glow", { scale: 1.12, duration: 13, ease: "sine.inOut", repeat: -1, yoyo: true, transformOrigin: "50% 20%" });
  gsap.to(".hero-inner", { yPercent: -12, autoAlpha: 0.25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // skills tiles stagger in
  gsap.from("#skills .s-tool", { y: 12, autoAlpha: 0, duration: 0.45, ease: "power3.out", stagger: 0.025, clearProps: "transform", scrollTrigger: { trigger: "#skills", start: "top 70%", once: true } });

  // section reveals
  gsap.set(".reveal", { y: 28, autoAlpha: 0 });
  ScrollTrigger.batch(".reveal", {
    start: "top 88%", once: true,
    onEnter: (els) => gsap.to(els, {
      y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", stagger: 0.09, overwrite: true, clearProps: "transform",
      onComplete: () => els.forEach((el) => el.classList.add("is-in")),
    }),
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  addEventListener("load", () => ScrollTrigger.refresh());
})();
