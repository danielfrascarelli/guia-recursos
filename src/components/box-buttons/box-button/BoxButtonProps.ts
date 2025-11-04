import type { ItemVariant } from "../../../shared/utils/Item";

export interface BoxButtonProps {
    title?: string | React.ReactNode;
    subtitle?: string;
    icon?: React.ReactNode;
    imageUrl?: string;
    variant?: ItemVariant;
    onClick?: () => void;

    style: any
};