import type { ItemVariant } from "../../shared/utils/Item";

export interface BoxButtonProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    imageUrl?: string;
    variant?: ItemVariant; 
    onClick?: () => void; 

    style: any
};