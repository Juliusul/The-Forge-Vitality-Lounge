"use client";

import { useState } from "react";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

const smartGymPricing = [
  { label: "12 Monate", price: "44,90" },
  { label: "6 Monate", price: "49,90" },
  { label: "1 Monat", price: "59,90" },
];

const hybridPricing = [
  { label: "12 Monate", price: "74,90" },
  { label: "6 Monate", price: "79,90" },
  { label: "1 Monat", price: "89,90" },
];

const smartGymFeatures = [
  "05:00 – 23:00 Uhr Zugang",
  "365 Tage im Jahr",
  "PRECOR Premium Geräte",
  "Face-ID Zugang",
  "WLAN & Parkplätze",
  "Videoüberwachung",
  "Große Einzelumkleiden",
];

const hybridFeatures = [
  "Alles aus Smart Gym",
  "Technikkurse (Kettlebell, Bodyweight, Barbell)",
  "Strength & Conditioning Sessions",
  "Kleine Gruppen (max. 8 Teilnehmer)",
  "Trainingsplan alle 3 Monate",
  "ELEIKO Functional Area",
];

export default function PricingCards() {
  const [smartGymIdx, setSmartGymIdx] = useState(0);
  const [hybridIdx, setHybridIdx] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#c19255]/10">
      {/* Smart Gym */}
      <div className="p-10 lg:p-12 relative overflow-hidden bg-[#181816]">
        <SectionLabel>Basis-Mitgliedschaft</SectionLabel>
        <h2
          className="text-[#f8f7f2] uppercase mb-2"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Smart Gym
        </h2>

        <div className="my-6">
          <p className="text-[#5a5a55] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            Laufzeit wählen
          </p>
          <div className="relative">
            <select
              value={smartGymIdx}
              onChange={(e) => setSmartGymIdx(Number(e.target.value))}
              className="w-full bg-[#111110] border border-[#c19255]/20 text-[#f8f7f2] text-[13px] font-light px-4 py-3 pr-10 outline-none focus:border-[#c19255] transition-colors appearance-none cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {smartGymPricing.map((opt, i) => (
                <option key={opt.label} value={i}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#c19255" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-1 my-8">
          <span
            className="text-[#f8f7f2] leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "4rem",
              letterSpacing: "-0.02em",
            }}
          >
            {smartGymPricing[smartGymIdx].price}€
          </span>
          <span
            className="text-[#8a8a82] text-sm font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            /Monat
          </span>
        </div>

        <div className="h-px bg-[#c19255]/15 mb-8" />

        <div className="mb-6">
          <p
            className="text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Inklusive
          </p>
          <ul className="flex flex-col gap-3">
            {smartGymFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full" />
                <span
                  className="text-[12px] font-light text-[#b8b8b0]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <p
            className="text-[#5a5a55] text-[10px] tracking-[0.18em] uppercase font-semibold mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Zusatzkosten
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <div className="w-1 h-1 bg-[#3e3e3a] flex-shrink-0 rounded-full" />
              <span
                className="text-[12px] font-light text-[#5a5a55]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Geräteeinweisung optional: 29,90 € pro Termin
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1 h-1 bg-[#3e3e3a] flex-shrink-0 rounded-full" />
              <span
                className="text-[12px] font-light text-[#5a5a55]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Aktivierungsgebühr: 14,90 €
              </span>
            </li>
          </ul>
        </div>

        <Button href="/contact" variant="outline" className="w-full text-center">
          Jetzt anfragen
        </Button>
      </div>

      {/* Hybrid Fitness */}
      <div className="p-10 lg:p-12 relative overflow-hidden bg-[#1a1a16]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c19255] via-[#d4ab74] to-[#c19255]" />
        <SectionLabel>Inkl. Smart Gym</SectionLabel>
        <h2
          className="text-[#f8f7f2] uppercase mb-2"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Hybrid Fitness
        </h2>

        <div className="my-6">
          <p className="text-[#5a5a55] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            Laufzeit wählen
          </p>
          <div className="relative">
            <select
              value={hybridIdx}
              onChange={(e) => setHybridIdx(Number(e.target.value))}
              className="w-full bg-[#111110] border border-[#c19255]/20 text-[#f8f7f2] text-[13px] font-light px-4 py-3 pr-10 outline-none focus:border-[#c19255] transition-colors appearance-none cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {hybridPricing.map((opt, i) => (
                <option key={opt.label} value={i}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#c19255" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-1 my-8">
          <span
            className="text-[#f8f7f2] leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "4rem",
              letterSpacing: "-0.02em",
            }}
          >
            {hybridPricing[hybridIdx].price}€
          </span>
          <span
            className="text-[#8a8a82] text-sm font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            /Monat
          </span>
        </div>

        <div className="h-px bg-[#c19255]/15 mb-8" />

        <div className="mb-6">
          <p
            className="text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Inklusive
          </p>
          <ul className="flex flex-col gap-3">
            {hybridFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full" />
                <span
                  className="text-[12px] font-light text-[#b8b8b0]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Button href="/contact" variant="primary" className="w-full text-center">
          Jetzt anfragen
        </Button>
      </div>
    </div>
  );
}
