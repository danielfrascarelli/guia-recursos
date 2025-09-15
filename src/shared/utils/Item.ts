export type ItemVariant = "green" | "orange" | "white" | "pretty_white";

export interface ListItem extends CoreItem {
    icon?: React.ReactNode;
    imageUrl?: string;
    variant: ItemVariant; 
};

export interface CoreItem {
    id: string;
    url?: string;
};

export interface TextListItem extends ListItem {
    title: string;
    subtitle?: string;
};
