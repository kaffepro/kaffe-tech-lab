"use client";

import BentoGrid from "@/components/BentoGrid";
import BentoItem from "@/components/BentoItem";
import LiveBrewStatus from "@/components/LiveBrewStatus";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Github, Terminal, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="min-h-screen bg-background p-6 md:p-12 lg:p-24 selection:bg-accent-blue selection:text-white">
      {/* Header Section */}
      <header className="mb-16 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-accent-coffee/20" />
            <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-stone-400">
              {t("header.subtitle")}
            </h2>
          </div>
          <div className="flex items-baseline gap-4">
            <h1 className="text-5xl font-extralight text-stone-800 tracking-tight">
              {t("header.title")}
            </h1>
            <span className="text-sm font-mono text-stone-300">{t("header.version")}</span>
          </div>
        </div>
        <LanguageSwitcher />
      </header>

      {/* Bento Grid Layout */}
      <BentoGrid>
        {/* C-position (Large): Live Brew Status */}
        <BentoItem 
          colSpan="md:col-span-2" 
          rowSpan="md:row-span-2" 
          delay={0.1}
          className="group"
        >
          <LiveBrewStatus />
        </BentoItem>

        {/* Side (Medium): Barista Console */}
        <BentoItem 
          colSpan="md:col-span-2" 
          rowSpan="md:row-span-1" 
          delay={0.2}
        >
          <div className="p-8 h-full flex flex-col bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                {t("barista.interface")}
              </h3>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-stone-100" />
                <div className="w-2 h-2 rounded-full bg-stone-100" />
                <div className="w-2 h-2 rounded-full bg-accent-coffee/20" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-stone-800 tracking-tight mb-4">
              {t("barista.title")}
            </h2>
            <div className="flex-1 flex gap-3">
              <div className="flex-1 rounded-xl bg-stone-900 p-4 flex items-center justify-center">
                <div className="w-full space-y-2">
                  <div className="h-1 w-2/3 bg-accent-blue/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent-blue" />
                  </div>
                  <div className="h-1 w-full bg-stone-800 rounded-full" />
                </div>
              </div>
              <div className="w-20 rounded-xl border border-divider/40 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-stone-200" />
              </div>
            </div>
          </div>
        </BentoItem>

        {/* Small Items Section */}
        {/* GitHub Commit */}
        <BentoItem 
          colSpan="md:col-span-1" 
          rowSpan="md:row-span-1" 
          delay={0.3}
          className="hover:border-accent-blue/30"
        >
          <div className="p-6 h-full flex flex-col justify-between bg-white">
            <Github className="w-5 h-5 text-stone-300" />
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                {t("git.title")}
              </h3>
              <p className="text-stone-800 font-mono text-[11px] leading-tight">
                {t("git.commit")}
              </p>
            </div>
          </div>
        </BentoItem>

        {/* Today's SOE */}
        <BentoItem 
          colSpan="md:col-span-1" 
          rowSpan="md:row-span-1" 
          delay={0.4}
        >
          <div className="p-6 h-full flex flex-col justify-between bg-white">
            <Info className="w-5 h-5 text-stone-300" />
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                {t("soe.title")}
              </h3>
              <p className="text-stone-800 text-sm font-light leading-snug">
                {t("soe.bean")} <span className="text-accent-coffee/60">{t("soe.region")}</span>
              </p>
            </div>
          </div>
        </BentoItem>

        {/* Brew CLI */}
        <BentoItem 
          colSpan="md:col-span-1" 
          rowSpan="md:row-span-1" 
          delay={0.5}
        >
          <div className="p-6 h-full flex flex-col bg-stone-900 text-stone-400 font-mono text-[10px]">
            <div className="flex items-center gap-2 mb-4 text-accent-blue">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">{t("cli.title")}</span>
            </div>
            <div className="space-y-1">
              <p><span className="text-stone-600">$</span> kaffe --status</p>
              <div className="flex items-center gap-2">
                <span className="text-stone-600">$</span>
                <span className="w-2 h-3 bg-accent-blue/60 animate-pulse" />
              </div>
            </div>
          </div>
        </BentoItem>
      </BentoGrid>

      {/* Footer Info */}
      <footer className="mt-16 flex justify-between items-center text-[10px] font-medium uppercase tracking-[0.2em] text-stone-300">
        <p>{t("footer.copyright")}</p>
        <div className="flex gap-6">
          <p>{t("footer.privacy")}</p>
          <p>{t("footer.logs")}</p>
        </div>
      </footer>
    </main>
  );
}
