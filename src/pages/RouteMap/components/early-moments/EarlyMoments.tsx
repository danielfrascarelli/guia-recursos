import styles from "./EarlyMoments.module.scss"; 
import { getContentDefinition } from "./ContentDefinition"; 
import { BoxListOptions } from "../../../../components/box-list-options/BoxListOptions";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import { TextListOptions } from "../../../../components/text-list-options/TextListOptions";
import TitleBar from "../../../../components/title-bar/TitleBar";

export interface EarlyMomentsProps extends DefinitionProps  {};

export default function EarlyMoments() {

  const items = getContentDefinition().map(i => ({
    title: (i.props as DefinitionProps).title,
    icon: (i.props as DefinitionProps).icon,
    imageUrl: (i.props as DefinitionProps).imageUrl,
    ...i
  }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Primeros momentos"} />
      <main className={styles.main}>
        <div className="d-block d-sm-none">
          <TextListOptions items={items} />
        </div>
        <div className="d-none d-sm-block">
          <BoxListOptions items={items} variant="contacts" />
        </div>
      </main>
    </div>
  );
} 
