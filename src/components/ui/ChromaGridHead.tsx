"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ChromaGrid from "./ChromaGrid";
import UnderlineText from "./underlinetext";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGridHead: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: "/images/team/busarah.jpg",
      title: "Sarah Astiti S.kom., M.MT.",
      subtitle: "",
      handle: "Dosen Wali",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
    },
    {
      image: "/images/team/habib2.jpg",
      title: "Habib Rafi'i",
      subtitle: "",
      handle: "Komandan Tingkat Kelas",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative flex w-full flex-col items-center justify-between gap-4 px-4 py-20 md:flex-row md:gap-6 md:px-0 md:pt-24 md:pb-12 lg:gap-8 lg:px-8 lg:pt-27 lg:pb-15 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Left Card */}
      {data[0] && (
        <article
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(data[0].url)}
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[15px] border-2 border-transparent text-center transition-colors duration-300 sm:w-[200px] md:w-[300px] md:rounded-[20px] lg:w-[300px]"
          style={
            {
              "--card-border": data[0].borderColor || "transparent",
              background: data[0].gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 box-border flex-1 p-[10px]">
            <img
              src={data[0].image}
              alt={data[0].title}
              loading="lazy"
              className="h-70 w-full rounded-[10px] object-cover"
            />
          </div>
          <footer className="relative z-10 flex flex-col gap-1 p-3 font-sans text-white">
            <h3 className="m-0 text-[0.95rem] font-semibold md:text-[1.05rem]">
              {data[0].title}
            </h3>

            {data[0].handle && (
              <span className="text-[0.85rem] opacity-80 md:text-[0.95rem]">
                {data[0].handle}
              </span>
            )}

            <p className="m-0 text-[0.75rem] opacity-85 md:text-[0.85rem]">
              {data[0].subtitle}
            </p>
          </footer>
        </article>
      )}

      {/* Center Text - Mobile: First, Tablet+: Middle */}
      <div className="order-first flex w-full flex-1 flex-col items-center justify-center text-center md:order-none md:w-auto">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white"
        >
          Our Team
        </h1>
        <UnderlineText />

        <p className="max-w-xs text-xs text-slate-600 sm:max-w-sm sm:text-sm md:max-w-md md:text-base lg:max-w-lg lg:text-lg dark:text-slate-300">
          Isi pikiranku kamu Jadi terlalu banyak buang waktu Dari atas sampai
          bawah, anggun Baby know that I just wanna be with you, uh Siang-siang
          kepikiran Malam-malam sendirian Scrolling Tik-Tok feednya isi
          cinta-cintaan Know that one day i will Ask u to be mine
        </p>
      </div>

      {/* Right Card */}
      {data[1] && (
        <article
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(data[1].url)}
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[15px] border-2 border-transparent text-center transition-colors duration-300 sm:w-[200px] md:w-[300px] md:rounded-[20px] lg:w-[300px]"
          style={
            {
              "--card-border": data[1].borderColor || "transparent",
              background: data[1].gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 box-border flex-1 p-[10px]">
            <img
              src={data[1].image}
              alt={data[1].title}
              loading="lazy"
              className="h-70 w-full rounded-[10px] object-cover"
            />
          </div>
          <footer className="relative z-10 flex flex-col gap-1 p-3 font-sans text-white">
            <h3 className="m-0 text-[0.95rem] font-semibold md:text-[1.05rem]">
              {data[1].title}
            </h3>

            {data[1].handle && (
              <span className="text-[0.85rem] opacity-80 md:text-[0.95rem]">
                {data[1].handle}
              </span>
            )}

            <p className="m-0 text-[0.75rem] opacity-85 md:text-[0.85rem]">
              {data[1].subtitle}
            </p>
          </footer>
        </article>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-[250ms]"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGridHead;
