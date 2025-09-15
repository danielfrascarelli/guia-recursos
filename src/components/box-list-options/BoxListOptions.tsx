import React from "react";
import { useNavigate } from "react-router-dom";

import "./box-list-options.scss";
import type { BoxListOptionsProps, BoxListVariant } from "./BoxListOptionsProps";
import { BoxButton } from "../box-button/BoxButton";

export const BoxListOptions: React.FC<BoxListOptionsProps> = ({ items, variant = "default",

  bg,
  text,
  border,
  className,
}) => {
  const navigate = useNavigate();

  const VARIANT_STYLES: Record<BoxListVariant, React.CSSProperties> = {
    contacts: {
      ["--bl-bg" as any]: "var(--brand-white)",
      ["--bl-text" as any]: "var(--brand-ink)",
      ["--bl-border" as any]: "transparent",
    },
    faq: {
      ["--bl-bg" as any]: "var(--brand-accent)",
      ["--bl-text" as any]: "var(--brand-ink)",
      ["--bl-border" as any]: "transparent",
    },
    inr: {
      ["--bl-bg" as any]: "var(--brand-accent)",
      ["--bl-text" as any]: "var(--brand-ink)",
      ["--bl-border" as any]: "transparent",
    },
    white: {
      ["--bl-bg" as any]: "var(--bs-light)",
      ["--bl-text" as any]: "var(--bs-body-color)",
      ["--bl-border" as any]: "var(--bs-border-color)",
    },
    default: {
      ["--bl-bg" as any]: "var(--bs-light)",
      ["--bl-text" as any]: "var(--bs-body-color)",
      ["--bl-border" as any]: "var(--bs-border-color)",
    },
  };

  const style: React.CSSProperties = {
    ...VARIANT_STYLES[variant],
    ...(bg ? { ["--bl-bg" as any]: bg } : null),
    ...(text ? { ["--bl-text" as any]: text } : null),
    ...(border ? { ["--bl-border" as any]: border } : null),
  };

  return (
    <nav
      className={`d-flex flex-wrap justify-content-center gap-2 gap-md-3 gap-lg-4 gap-xl-5 ${className}`}
      style={style}>
      {items.map((item) => (
        <BoxButton
          key={item.id}
          icon={item.icon}
          imageUrl={item.imageUrl}
          title={item.title}
          subtitle={item.subtitle}
          variant={item.variant}
          onClick={() => item.url && navigate(item.url)}
          style={{
            backgroundColor: "var(--bl-bg)",
            color: "var(--bl-text)",
            borderColor: "var(--bl-border)",
          }}
        />
      ))}
    </nav>
  );
};
