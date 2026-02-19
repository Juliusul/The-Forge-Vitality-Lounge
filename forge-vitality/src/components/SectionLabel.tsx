interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}

export default function SectionLabel({ children, light = false, center = false }: SectionLabelProps) {
  return (
    <p
      className={`text-[10px] tracking-[0.22em] uppercase font-light mb-6 ${
        light ? "text-[#b8a882]" : "text-[#b8a882]"
      } ${center ? "text-center" : ""}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </p>
  );
}
