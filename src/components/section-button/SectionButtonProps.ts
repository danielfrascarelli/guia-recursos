export interface SectionButtonProps {
    label: string;
    icon?: React.ReactNode;
    variant?: "green" | "orange";
    showRight?: boolean;
    onClick?: () => void;
    /** separación entre ícono y texto (px, rem, etc). Ej: 12 o "0.75rem" */
    gap?: number | string;
};