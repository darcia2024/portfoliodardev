"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxGalleryProps {
  images: string[];
  title: string;
}

export function LightboxGallery({ images, title }: LightboxGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openAt = (i: number) => {
    setIndex(i);
    setZoom(1);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
    setZoom(1);
  };
  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    setZoom(1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={title + "-gallery-" + i}
            type="button"
            onClick={() => openAt(i)}
            className="group relative lift w-full overflow-hidden rounded-[28px] border border-border text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={src}
              alt={title + " screenshot " + (i + 1)}
              width={2560}
              height={1440}
              className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 flex items-end rounded-[28px] bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                <span>&#128269;</span> Lihat detail
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              &#10005;
            </button>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur transition-colors hover:bg-white/20 md:left-6"
                aria-label="Previous"
              >
                &#8249;
              </button>
            )}

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur transition-colors hover:bg-white/20 md:right-6"
                aria-label="Next"
              >
                &#8250;
              </button>
            )}

            <motion.div
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => (z > 1 ? 1 : 2));
              }}
              style={{ cursor: zoom > 1 ? "zoom-out" : "zoom-in" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  alt={title + " ??? screenshot " + (index + 1)}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, scale: zoom }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur">
                {index + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((z) => (z > 1 ? 1 : 2));
                }}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                {zoom > 1 ? "Zoom out" : "Zoom detail"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

