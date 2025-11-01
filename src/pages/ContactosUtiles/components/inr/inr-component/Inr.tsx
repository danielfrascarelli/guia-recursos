import React from "react";

import styles from "./Inr.module.scss";
import type { InrProps } from "./InrProps";
import { getContentDefinition as getOfficesContentDefinition } from "./OfficesContentDefinition";
import { getContentDefinition as getUnitiesContentDefinition } from "./UnitiesContentDefinition";
import type { InrUnidadProps } from "../inr-unidad-component/InrUnidadProps";
import { BoxListOptions } from "../../../../../components/list-options/box-list-options/BoxListOptions";
import { TextListOptions } from "../../../../../components/list-options/text-list-options/TextListOptions";
import TitleBar from "../../../../../components/title-bar/TitleBar";
import SubtitleBar from "../../../../../components/subtitle-bar/SubtitleBar";
import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import { isBlankOrEmpty } from "../../../../../shared/utils/String";
import type { InrOfficeProps } from "../inr-offices-component/InrOfficeProps";

export const Inr: React.FC<InrProps> = ({ }) => {
  const getBoxTitle = (props: InrUnidadProps | InrOfficeProps): string => props.title;
  const getBoxSubtitle = (props: InrUnidadProps | InrOfficeProps): string => ("shortAddressDescription" in props) ? props.shortAddressDescription ?? "" : "";

  const fnListItems = function (cd: ContentDefinition[]) {
    return cd.map(u => ({
      ...u,
      title: `${getBoxTitle(u.props as InrUnidadProps | InrOfficeProps)}
      ${isBlankOrEmpty(getBoxSubtitle(u.props as InrUnidadProps | InrOfficeProps)) ? "" : " - "}
      ${isBlankOrEmpty(getBoxSubtitle(u.props as InrUnidadProps | InrOfficeProps)) ? "" : getBoxSubtitle(u.props as InrUnidadProps)}`
    }));
  }

  const fnBoxItems = function (cd: ContentDefinition[]) {
    return cd.map(u => ({
      ...u,
      title: getBoxTitle(u.props as InrUnidadProps | InrOfficeProps),
      subtitle: getBoxSubtitle(u.props as InrUnidadProps | InrOfficeProps),
    }));
  }

  return (
    <div className={styles.screen}>
      <TitleBar title="Instituto Nacional de Rehabilitación"></TitleBar>
      <div className="mt-3">
        <SubtitleBar text="Oficinas"></SubtitleBar>
        <div className="d-block d-sm-none">
          <TextListOptions items={fnListItems(getOfficesContentDefinition())} />
        </div>
        <div className="d-none d-sm-block">
          <BoxListOptions items={fnBoxItems(getOfficesContentDefinition())} variant="inr" />
        </div>
      </div>
      <div className="mt-3">
        <SubtitleBar text="Unidades"></SubtitleBar>
        <div className="d-block d-sm-none">
          <TextListOptions items={fnListItems(getUnitiesContentDefinition())} />
        </div>
        <div className="d-none d-sm-block">
          <BoxListOptions items={fnBoxItems(getUnitiesContentDefinition())} variant="inr" />
        </div>
      </div>
    </div>
  );
};
