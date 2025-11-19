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
    ...i
  }));

  return (
    <div className={styles.screen}>
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Contactos útiles"} />
      </div>
      <main className={styles.main}>
        <div className="d-block common-layout-margin mt-4">
          <ImageListOptions items={items} />
        </div>
      </main>
    </div>
  );
}
