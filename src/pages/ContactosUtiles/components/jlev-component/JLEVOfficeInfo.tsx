import React from "react";
import type { JLEVOfficeInfoProps } from "./JLEVOfficeInfoProps";
import { CommonOfficeInfo } from "../common/common-component/CommonOfficeInfo";

export const JLEVOfficeInfo: React.FC<JLEVOfficeInfoProps> = ({ data }: JLEVOfficeInfoProps) => {

  return (
    <div>
      <div>
        <CommonOfficeInfo title={data.longName ?? data.shortName ?? ""} data={data} />
      </div>
      <div>
        {data.areas.map(a => (
          <div>
            <CommonOfficeInfo title={a.longName ?? a.shortName ?? ""} data={a} showHeader={false} />
          </div>
        ))
        }
      </div>
    </div>
  );
}