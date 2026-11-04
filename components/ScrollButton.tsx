"use client";

interface Props {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollButton({ targetId, children, className, style }: Props) {
  return (
    <button
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
