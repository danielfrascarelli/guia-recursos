import React from "react";

import type { TypePersonProps } from "./TypePersonProps";  

import { getContentDefinition } from "./ContentDefinition"; 
import { TextListOptions } from "../../../../components/list-options/text-list-options/TextListOptions";
import type { TextListItem } from "../../../../shared/utils/Item";

export const TypePerson: React.FC<TypePersonProps> = ({ type }) => {

  const items: TextListItem[] = getContentDefinition(type).map(u => ({
    ...u,
    title: `${(u.props as TextListItem).title}`,
  }));

  return (
    <div className="d-flex m-3">
      <div className="d-block  ">
        <TextListOptions items={items} />
      </div>
      {/* <div className="d-none d-sm-block">
        <BoxListOptions items={items} variant="inr" />
      </div> */}
    </div>
  );
};
