import { BoxListOptions } from "../../components/list-options/box-list-options/BoxListOptions";
import type { DefinitionProps } from "../../components/DefinitionProps";
import { TextListOptions } from "../../components/list-options/text-list-options/TextListOptions";
import TitleBar from "../../components/title-bar/TitleBar";
import styles from "./ContactosUtiles.module.scss"; 
import { getContentDefinition } from "./ContentDefinition"; 

export interface ContactosUtilesProps extends DefinitionProps  {};

export default function ContactosUtiles() {

  const items = getContentDefinition().map(i => ({
    title: (i.props as DefinitionProps).title,
    icon: (i.props as DefinitionProps).icon,
    imageUrl: (i.props as DefinitionProps).imageUrl,
    ...i
  }));

  return (
    <div className={styles.screen}>
      <TitleBar title={"Contactos útiles"} />
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Contactos útiles</h1> */}
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
