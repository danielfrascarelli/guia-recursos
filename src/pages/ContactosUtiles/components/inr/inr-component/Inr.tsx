import React from "react";

import styles from "./Inr.module.scss";
import type { InrProps } from "./InrProps";
import { getContentDefinition as getOfficesContentDefinition } from "./OfficesContentDefinition";
import { getContentDefinition as getUnitiesContentDefinition } from "./UnitiesContentDefinition";
import type { InrUnidadProps } from "../inr-unidad-component/InrUnidadProps";
import { BoxListOptions } from "../../../../../components/list-options/box-list-options/BoxListOptions";
import TitleBar from "../../../../../components/title-bar/TitleBar";
import SubtitleBar from "../../../../../components/subtitle-bar/SubtitleBar";
import type { ContentDefinition } from "../../../../../components/ItemDefinition";
import { isBlankOrEmpty } from "../../../../../shared/utils/String";
import type { InrOfficeProps } from "../inr-offices-component/InrOfficeProps";
import BackButton from "../../../../../components/back-button/BackButton";
import { ImageListOptions } from "../../../../../components/list-options/image-list-options/ImageListOptions";

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
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title="Instituto Nacional de Rehabilitación" />
      </div>
      <div className="common-layout-margin gap-3">
        <div className="mt-3">
          <SubtitleBar text="Oficinas"></SubtitleBar>
          <div className="d-block">
            <ImageListOptions items={fnListItems(getOfficesContentDefinition())} />
          </div>
        </div>
        <div className="mt-3">
          <SubtitleBar text="Unidades"></SubtitleBar>
          <div className="d-block">
            <ImageListOptions items={fnListItems(getUnitiesContentDefinition())} />
          </div>
        </div>
      </div>
    </div>
  );
};
