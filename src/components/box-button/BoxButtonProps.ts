export interface BoxButtonProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    imageUrl?: string;
    variant?: "green" | "orange"; 
    onClick?: () => void; 

    style: any
};