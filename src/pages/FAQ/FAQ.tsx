import TitleBar from "../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../components/DefinitionProps";
import { RelativeType } from "../../shared/utils/RelativeType";
import { getContentDefinition } from "./ContentDefinition";
import type { TextListItem } from "../../shared/utils/Item";
import { ImageListOptions } from "../../components/list-options/image-list-options/ImageListOptions";
import BackButton from "../../components/back-button/BackButton";

import styles from "./FAQ.module.scss";
import "./faq.scss";

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
        <div className="fp-intro-sticky">
          <BackButton />
          <TitleBar title="Orientación básica" />
        </div>
        <main className={`${styles.main} mt-4`}>
          <div className="d-block common-layout-margin-only-desktop gap-3">
            <ImageListOptions items={items} />
          </div>
        </main>
      </div>
    </>
  );
}

