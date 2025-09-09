export interface ListItem extends CoreItem {
    icon?: React.ReactNode;
    variant: "green" | "orange";
};

export interface CoreItem {
    id: string;
    url?: string;
};

export interface TextListItem extends ListItem {
    title: string;
};
