import { BoxListOptions } from "../../components/list-options/box-list-options/BoxListOptions";

import styles from "./FAQ.module.scss";
import "./faq.scss";
import TitleBar from "../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../components/DefinitionProps";
import { getRelativeTypeName, RelativeType } from "../../shared/utils/RelativeType";
import { getContentDefinition } from "./ContentDefinition";
import type { TextListItem } from "../../shared/utils/Item";
import { ImageListOptions } from "../../components/list-options/image-list-options/ImageListOptions";

export interface FAQProps extends DefinitionProps {
  type: RelativeType;
};

export default function FAQ({ type }: FAQProps) {

  const items: TextListItem[] = getContentDefinition(type).map(u => ({
    ...u,
    title: `${(u.props as TextListItem).title}`,
  }));

  return (
    <>
      <div className={styles.screen}>
        <TitleBar title={`Preguntas frecuentes del ${getRelativeTypeName(type)} `} />
        <main className={styles.main}>
          <div className="d-block d-sm-none">
            <ImageListOptions items={items} />
          </div>
          <div className="d-none d-sm-block">
            <BoxListOptions items={items} variant="faq" />
          </div>
        </main>
      </div>
    </>
  );
}

