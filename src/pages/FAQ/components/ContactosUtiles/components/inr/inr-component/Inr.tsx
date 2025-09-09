import React from "react";

import styles from "./Inr.module.scss";

import type { InrProps } from "./InrProps";
import { TextListOptions } from "../../../../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextListItem } from "../../../../../../../shared/utils/Item";
import type { InrUnidadProps } from "../inr-unidad-component/InrUnidadProps";

export const Inr: React.FC<InrProps> = ({ }) => {
  const inrContent = getContentDefinition();
  const items: TextListItem[] = inrContent.map(u => ({
    ...u,
    title: (u.props as InrUnidadProps).title
  }));

  return (
    <TextListOptions items={items} />
  );
};
