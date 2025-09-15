import type { TextListItem } from "../../shared/utils/Item";

export type BoxListVariant = "contacts" | "faq" | "inr" | "default" | "white";

export interface BoxListOptionsProps {
    items: TextListItem[];
    variant: BoxListVariant;


    /** overrides opcionales (pueden ser variables CSS o hex) */
    bg?: string;
    text?: string;
    border?: string;
    /** clases extra */
    className?: string;
};