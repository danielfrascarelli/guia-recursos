import React from "react";

import { BoxListOptions } from "../../../../components/list-options/box-list-options/BoxListOptions";
import type { TextListItem } from "../../../../shared/utils/Item";
import { ImageListOptions } from "../../../../components/list-options/image-list-options/ImageListOptions";

import type { SelectRelativeTypeProps } from "./SelectRelativeTypeProps";
import { getContentDefinition } from "./ContentDefinition";
import './select-relative-type.scss';

export const SelectRelativeType: React.FC<SelectRelativeTypeProps> = ({ }) => {

  const items: TextListItem[] = getContentDefinition().map(u => ({
    ...u,
    title: `${(u.props as TextListItem).title}`,
  }));

  return (
    <div className="screen">
      <main className="main">
        <div className="d-flex flex-column align-item-center m-3 mt-5">
          <div className="d-block d-sm-none">
            <ImageListOptions items={items} />
          </div>
          <div className="d-none d-sm-block">
            <BoxListOptions items={items} variant="white" />
          </div>
        </div></main></div>
  );
};
