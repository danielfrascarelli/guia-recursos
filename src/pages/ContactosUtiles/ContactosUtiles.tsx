import { BoxListOptions } from "../../components/list-options/box-list-options/BoxListOptions";
import type { DefinitionProps } from "../../components/DefinitionProps";
import TitleBar from "../../components/title-bar/TitleBar";
import styles from "./ContactosUtiles.module.scss";
import { getContentDefinition } from "./ContentDefinition";
import BackButton from "../../components/back-button/BackButton";
import { ImageListOptions } from "../../components/list-options/image-list-options/ImageListOptions";

export interface ContactosUtilesProps extends DefinitionProps { };

export default function ContactosUtiles() {

  const items = getContentDefinition().map(i => ({
    title: (i.props as DefinitionProps).title,
    // icon: (i.props as DefinitionProps).icon,
    // imageUrl: (i.props as DefinitionProps).imageUrl,
    ...i
  }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Contactos útiles"} />
      </div>
      <main className={styles.main}>
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
