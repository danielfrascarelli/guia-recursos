import React from "react";

import type { SelectRelativeTypeProps } from "./SelectRelativeTypeProps"; 
import { getContentDefinition } from "./ContentDefinition";

import './select-relative-type.scss'; 
import { BoxListOptions } from "../../../../components/list-options/box-list-options/BoxListOptions";
import { TextListOptions } from "../../../../components/list-options/text-list-options/TextListOptions";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { TextListItem } from "../../../../shared/utils/Item";

export const SelectRelativeType: React.FC<SelectRelativeTypeProps> = ({ }) => {

  const items: TextListItem[] = getContentDefinition().map(u => ({
    ...u,
    title: `${(u.props as TextListItem).title}`,
  }));

  return (
    <div className="screen">
      <TitleBar title={"Si tu familiar es"} />
      <main className="main">
        <div className="d-flex flex-column align-item-center m-3 mt-5">
          <div className="d-block d-sm-none">
            <TextListOptions items={items}  />
          </div>
          <div className="d-none d-sm-block">
            <BoxListOptions items={items} variant="white" />
          </div>
        </div></main></div>
  );
};
