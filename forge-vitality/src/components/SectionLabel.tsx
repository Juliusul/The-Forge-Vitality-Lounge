interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}

export default function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
      <div className="w-5 h-px bg-[#c19255] flex-shrink-0" />
      <p
        className="text-[#c19255] text-[10px] tracking-[0.22em] uppercase font-semibold"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </p>
    </div>
  );
}
