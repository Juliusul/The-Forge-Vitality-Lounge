import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "dark";
  className?: string;
}

export default function Button({ href, onClick, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-block text-[11px] tracking-[0.18em] uppercase font-semibold px-8 py-4 transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: "bg-[#c19255] text-[#0d0d0b] hover:bg-[#d4ab74]",
    outline:  "border border-[#c19255] text-[#c19255] hover:bg-[#c19255] hover:text-[#0d0d0b]",
    ghost:    "border border-[#f8f7f2]/25 text-[#f8f7f2] hover:border-[#c19255] hover:text-[#c19255]",
    dark:     "bg-[#181816] text-[#f8f7f2] border border-[#3e3e3a] hover:border-[#c19255] hover:text-[#c19255]",
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
