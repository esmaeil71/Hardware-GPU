import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export function Card({ children, className = "" }: Props) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="card-header">
      <div>
        <h2 className="card-title">{title}</h2>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Badge({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      className="badge"
      style={
        color
          ? {
              borderColor: `${color}33`,
              backgroundColor: `${color}14`,
              color,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}

export function SectionHint({ children }: { children: ReactNode }) {
  return <p className="section-hint">{children}</p>;
}
