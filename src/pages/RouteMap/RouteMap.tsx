import styles from "./RouteMap.module.scss";
import { getContentDefinition } from "./ContentDefinition";
import type { DefinitionProps } from "../../components/DefinitionProps";
import { BoxListOptions } from "../../components/list-options/box-list-options/BoxListOptions";
import TitleBar from "../../components/title-bar/TitleBar";
import { ImageListOptions } from "../../components/list-options/image-list-options/ImageListOptions";

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
      <main className={`${styles.main} mt-4`}>
        <div className="d-block d-sm-none">
          <ImageListOptions items={items} />
        </div>
        <div className="d-none d-sm-block">
          <BoxListOptions items={items} variant="contacts" />
        </div>
      </main>
    </div>
  );
} 
