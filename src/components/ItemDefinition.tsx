import type { ListItem } from "../shared/utils/Item";

import { TextComponent } from "./text-component/TextComponent";
import { Text2Component } from "./text2-component/Text2Component";
import { TextListOptions } from "./text-list-options/TextListOptions";

import type { Text2ComponentProps } from "./text2-component/Text2ComponentProps";
import type { TextComponentProps } from "./text-component/TextComponentProps";
import type { TextListOptionsProps } from "./text-list-options/TextListOptionsProps";
import { Inr } from "../pages/FAQ/components/ContactosUtiles/components/inr/inr-component/Inr";
import type { InrProps } from "../pages/FAQ/components/ContactosUtiles/components/inr/inr-component/InrProps";
import type { InrUnidadProps } from "../pages/FAQ/components/ContactosUtiles/components/inr/inr-unidad-component/InrUnidadProps";
import { InrUnidad } from "../pages/FAQ/components/ContactosUtiles/components/inr/inr-unidad-component/InrUnidad";
import type { CommonOfficeInfoProps } from "../pages/FAQ/components/ContactosUtiles/components/common/common-component/CommonOfficeInfoProps";
import { CommonOfficeInfo } from "../pages/FAQ/components/ContactosUtiles/components/common/common-component/CommonOfficeInfo";

export const registry = {
    TextComponent: TextComponent as React.ComponentType<TextComponentProps>,
    Text2Component: Text2Component as React.ComponentType<Text2ComponentProps>,
    TextListOptionsComponent: TextListOptions as React.ComponentType<TextListOptionsProps>,
    InrComponent: Inr as React.ComponentType<InrProps>,
    InrUnidadComponent: InrUnidad as React.ComponentType<InrUnidadProps>,
    CommonOfficeInfoComponent: CommonOfficeInfo as React.ComponentType<CommonOfficeInfoProps>
} as const;

export type Registry = typeof registry;
type Key = keyof Registry;
type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;

interface ContentItemBase extends ListItem { }

interface ContentItemOf<T extends Key> extends ContentItemBase {
    componentType: T;
    props: PropsOf<Registry[T]>;
}

export type ContentDefinition = { [K in Key]: ContentItemOf<K> }[Key];
