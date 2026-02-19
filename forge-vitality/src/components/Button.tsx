import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export default function Button({ href, onClick, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-block text-[11px] tracking-[0.18em] uppercase font-light px-8 py-4 transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[#b8a882] text-[#0f0f0d] hover:bg-[#d4c9a8]",
    outline:
      "border border-[#b8a882] text-[#b8a882] hover:bg-[#b8a882] hover:text-[#0f0f0d]",
    ghost:
      "border border-[#fafaf8]/30 text-[#fafaf8] hover:border-[#b8a882] hover:text-[#b8a882]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={{ fontFamily: "'Inter', sans-serif" }}>
      {children}
    </button>
  );
}
