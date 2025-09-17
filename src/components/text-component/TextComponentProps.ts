import type { DefinitionProps } from "../DefinitionProps";

export interface TextComponentProps extends DefinitionProps {
    title: string;
    text: React.ReactNode;
};