export interface ListItem extends CoreItem {
    icon?: React.ReactNode;
    imageUrl?: string;
    variant: "green" | "orange";
};

export interface CoreItem {
    id: string;
    url?: string;
};

export interface TextListItem extends ListItem {
    title: string;
    subtitle?: string;
};
