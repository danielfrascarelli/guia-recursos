import React from "react";

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
    <div className="select-relative-type">
      <div className="select-relative-type-screen">
        <main className="select-relative-type-main">
          <div className="d-block select-relative-type-list mt-8 common-layout-margin-only-desktop gap-3">
            <ImageListOptions items={items} />
          </div>
        </main>
      </div>
    </div>
  );
};
