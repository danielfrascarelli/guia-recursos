import type { ListItem } from "../shared/utils/Item";

import { TextComponent } from "./text-component/TextComponent";
import { Text2Component } from "./text2-component/Text2Component";
import { TextListOptions } from "./text-list-options/TextListOptions";

import type { Text2ComponentProps } from "./text2-component/Text2ComponentProps";
import type { TextComponentProps } from "./text-component/TextComponentProps";
import type { TextListOptionsProps } from "./text-list-options/TextListOptionsProps"; 
import FAQ, { type FAQProps } from "../pages/FAQ/FAQ";
import ContactosUtiles, { type ContactosUtilesProps } from "../pages/ContactosUtiles/ContactosUtiles";
import { CommonOfficeInfo } from "../pages/ContactosUtiles/components/common/common-component/CommonOfficeInfo";
import type { CommonOfficeInfoProps } from "../pages/ContactosUtiles/components/common/common-component/CommonOfficeInfoProps";
import { Inr } from "../pages/ContactosUtiles/components/inr/inr-component/Inr";
import type { InrProps } from "../pages/ContactosUtiles/components/inr/inr-component/InrProps";
import { InrUnidad } from "../pages/ContactosUtiles/components/inr/inr-unidad-component/InrUnidad";
import type { InrUnidadProps } from "../pages/ContactosUtiles/components/inr/inr-unidad-component/InrUnidadProps";
import { TypePerson } from "../pages/RouteMap/components/type-person-component/TypePerson";
import type { TypePersonProps } from "../pages/RouteMap/components/type-person-component/TypePersonProps";
import { SelectRelativeType } from "../pages/RouteMap/components/select-relative-type/SelectRelativeType";
import type { SelectRelativeTypeProps } from "../pages/RouteMap/components/select-relative-type/SelectRelativeTypeProps";
import EarlyMoments, { type EarlyMomentsProps } from "../pages/RouteMap/components/early-moments/EarlyMoments";
import type { VisitasYContactoProps } from "../pages/FAQ/components/VisitasYContacto/VisitasYContacto";
import VisitasYContacto from "../pages/FAQ/components/VisitasYContacto/VisitasYContacto";
import AccesoADerechos, { type AccesoADerechosProps } from "../pages/FAQ/components/AccesoADerechos/AccesoADerechos";
import Salida, { type SalidaProps } from "../pages/FAQ/components/Salida/Salida";
import Salud, { type SaludProps } from "../pages/FAQ/components/Salud/Salud";
import Traslados, { type TrasladosProps } from "../pages/FAQ/components/Traslados/Traslados";

export const registry = {
    TextComponent: TextComponent as React.ComponentType<TextComponentProps>,
    Text2Component: Text2Component as React.ComponentType<Text2ComponentProps>,
    TextListOptionsComponent: TextListOptions as React.ComponentType<TextListOptionsProps>,
    InrComponent: Inr as React.ComponentType<InrProps>,
    InrUnidadComponent: InrUnidad as React.ComponentType<InrUnidadProps>,
    CommonOfficeInfoComponent: CommonOfficeInfo as React.ComponentType<CommonOfficeInfoProps>,
    SelectRelativeTypeComponent: SelectRelativeType as React.ComponentType<SelectRelativeTypeProps>,
    TypePersonComponent: TypePerson as React.ComponentType<TypePersonProps>,
    ContactosUtilesComponent: ContactosUtiles as React.ComponentType<ContactosUtilesProps>,
    FAQComponent: FAQ as React.ComponentType<FAQProps>,
    EarlyMomentsComponent: EarlyMoments as React.ComponentType<EarlyMomentsProps>,
    VisitasYContactoComponent: VisitasYContacto as React.ComponentType<VisitasYContactoProps>,
    TrasladosComponent: Traslados as React.ComponentType<TrasladosProps>,
    SaludComponent: Salud as React.ComponentType<SaludProps>,
    AccesoADerechosComponent: AccesoADerechos as React.ComponentType<AccesoADerechosProps>,
    SalidaComponent: Salida as React.ComponentType<SalidaProps>,

    
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
