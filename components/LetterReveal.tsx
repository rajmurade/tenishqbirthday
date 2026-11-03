"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import gsap from "gsap";

interface LetterRevealProps {
  onClose: () => void;
}

export function LetterReveal({ onClose }: LetterRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textContainerRef.current) return;
    const paragraphs = textContainerRef.current.querySelectorAll(".reveal-p");

    gsap.fromTo(
      paragraphs,
      {
        opacity: 0,
        y: 24,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.22,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-12 flex items-center justify-center bg-black/40 backdrop-blur-xl">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl glass-panel p-8 md:p-12 rounded-3xl shadow-2xl border border-garden-glowPrimary/30 overflow-hidden my-auto"
      >
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-garden-glowPrimary/10 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-garden-glowSecondary/10 blur-[80px] pointer-events-none" />

        <div className="flex flex-col items-center gap-1.5 mb-8 text-center">
          <Sparkles className="w-6 h-6 text-garden-glowPrimary animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-garden-glowSecondary font-sans">
            A Letter of Light
          </span>
        </div>

        <div
          ref={textContainerRef}
          className="max-h-[60vh] overflow-y-auto pr-4 text-garden-text space-y-6 md:space-y-7 text-sm md:text-base leading-relaxed font-serif tracking-wide select-text"
        >
          <h2 className="reveal-p text-xl md:text-2xl font-semibold text-white tracking-wide border-b border-white/10 pb-4">
            Dear Tanishq,
          </h2>

          <p className="reveal-p text-garden-accent">
            Happy Birthday to the boy who makes my world a little brighter just by being in it.
          </p>

          <p className="reveal-p text-garden-accent">
            I hope life gives you all the happiness your heart can hold.
          </p>

          <p className="reveal-p font-medium text-white">
            I wish you endless smiles, beautiful surprises, and dreams that come true.
          </p>

          <p className="reveal-p text-garden-text/90">
            I may not always find the perfect words to express how much you mean to me, <br />
            but I hope you never doubt how special you are.
          </p>

          <p className="reveal-p text-garden-text/90">
            If I could wish for one thing today, <br />
            it would be to keep seeing that beautiful smile of yours, <br />
            year after year.
          </p>

          <p className="reveal-p text-garden-glowPrimary font-medium italic text-center py-4 bg-white/5 rounded-xl border border-white/5">
            You deserve all the beautiful things life has to offer.
          </p>

          <div className="reveal-p space-y-2 text-center text-garden-text/80">
            <p className="italic">More laughter.</p>
            <p className="italic">More little adventures.</p>
            <p className="italic">And countless reasons to smile.</p>
          </div>

          <p className="reveal-p text-garden-text/90">
            I don't need grand promises or perfect moments, <br />
            I just want more little moments with you, <br />
            and more reasons to fall for you every day.
          </p>

          <p className="reveal-p text-white font-medium">
            You will always be someone incredibly special to me.
          </p>

          <p className="reveal-p text-garden-accent">
            So here's to another year of you, <br />
            and all the wonderful things waiting ahead.
          </p>

          <p className="reveal-p text-garden-glowPrimary text-shadow">
            If I could wish for one thing, <br />
            it would be to keep seeing that beautiful smile of yours, <br />
            year after year.
          </p>

          <p className="reveal-p text-xl font-medium pt-4 text-white">
            Happy Birthday, my favourite person. ❤️
          </p>

          <div className="reveal-p pt-4 border-t border-white/10 flex flex-col items-end">
            <span className="text-xs uppercase tracking-widest text-garden-glowSecondary">
              With love,
            </span>
            <span className="text-lg font-semibold text-white mt-1">Azra</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={onClose}
            className="glass-button px-8 py-3 rounded-xl flex items-center gap-2 text-sm uppercase tracking-widest text-garden-glowPrimary font-sans transition-all focus:outline-none focus:ring-1 focus:ring-garden-glowPrimary"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Close Letter</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}