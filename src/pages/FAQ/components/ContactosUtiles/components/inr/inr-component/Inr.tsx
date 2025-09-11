import React from "react";

import type { InrProps } from "./InrProps";
import { TextListOptions } from "../../../../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextListItem } from "../../../../../../../shared/utils/Item";
import type { InrUnidadProps } from "../inr-unidad-component/InrUnidadProps";
import { BoxListOptions } from "../../../../../../../components/box-list-options/BoxListOptions";

export const Inr: React.FC<InrProps> = ({ }) => {
  const inrContent = getContentDefinition();

  const getBoxTitle = (props: InrUnidadProps): string => props.title;
  const getBoxSubtitle = (props: InrUnidadProps): string => `${props.shortAddressDescription}`;

  const listItems: TextListItem[] = inrContent.map(u => ({
    ...u,
    title: `${getBoxTitle(u.props as InrUnidadProps)} - ${getBoxSubtitle(u.props as InrUnidadProps)}`
  }));
  const boxItems: TextListItem[] = inrContent.map(u => ({
    ...u,
    title: getBoxTitle(u.props as InrUnidadProps),
    subtitle: getBoxSubtitle(u.props as InrUnidadProps),
  }));

  return (
    <div className="d-flex m-3">
      <div className="d-block d-sm-none">
        <TextListOptions items={listItems} />
      </div>
      <div className="d-none d-sm-block">
        <BoxListOptions items={boxItems} variant="inr" />
      </div>
    </div>
  );
};
