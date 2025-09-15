import type { ItemVariant } from "../../shared/utils/Item";

export interface SectionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: React.ReactNode;
    variant?: ItemVariant;
    showLeftIcon?: boolean;
    showRight?: boolean;
    onClick?: () => void;
    gap?: number | string;
};