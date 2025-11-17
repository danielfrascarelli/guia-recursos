import styles from "./RouteMap.module.scss";
import { getContentDefinition } from "./ContentDefinition";
import type { DefinitionProps } from "../../components/DefinitionProps";
import TitleBar from "../../components/title-bar/TitleBar";
import { ImageListOptions } from "../../components/list-options/image-list-options/ImageListOptions";
import BackButton from "../../components/back-button/BackButton";

export default function RouteMap() {

  const items = getContentDefinition().map(i => ({
    title: (i.props as DefinitionProps).title,
    icon: (i.props as DefinitionProps).icon,
    imageUrl: (i.props as DefinitionProps).imageUrl,
    ...i
  }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Mapa de ruta"} />
      </div>
      <main className={`${styles.main} mt-8`}>
        <div className="d-block common-layout-margin-only-desktop gap-3">
          <ImageListOptions items={items} />
        </div>
      </main>
    </div>
  );
} 
