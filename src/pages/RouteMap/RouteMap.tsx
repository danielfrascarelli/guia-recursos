import styles from "./RouteMap.module.scss";
import { TextListOptions } from "../../components/text-list-options/TextListOptions";
import { getContentDefinition } from "./ContentDefinition";
import type { DefinitionProps } from "../../components/DefinitionProps";
import { BoxListOptions } from "../../components/box-list-options/BoxListOptions";
import TitleBar from "../../components/title-bar/TitleBar";

export default function RouteMap() {

  const items = getContentDefinition().map(i => ({
    title: (i.props as DefinitionProps).title,
    icon: (i.props as DefinitionProps).icon,
    imageUrl: (i.props as DefinitionProps).imageUrl,
    ...i
  }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Mapa de ruta"} />
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
