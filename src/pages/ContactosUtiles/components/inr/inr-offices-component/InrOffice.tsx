import React from "react";
import type { InrOfficeProps } from "./InrOfficeProps";
import { CommonOfficeInfo } from "../../common/common-component/CommonOfficeInfo";

export const InrOffice: React.FC<InrOfficeProps> = ({ title, data }: InrOfficeProps) => {

  return (
    <CommonOfficeInfo title={title} data={data} />
  )
} 