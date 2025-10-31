import type { DefinitionProps } from "../../../../components/DefinitionProps";
import TitleBar from "../../../../components/title-bar/TitleBar";

import './judicial-process.scss';
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";

export interface JudicialProcessProps extends DefinitionProps { };

export default function JudicialProcess() {

  const items = getContentDefinition().map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className="screen">
      <TitleBar title={"Proceso judicial"} />

      <main  >
        <div className="h-100">
          <div className="mx-3 p-0 pt-3 fp-family-role text-justify">

            <TextListOptions items={items} />
          </div>
        </div>
      </main>
    </div>
  );
} 
