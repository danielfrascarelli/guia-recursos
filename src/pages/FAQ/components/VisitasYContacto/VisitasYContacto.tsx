import { getContentDefinition } from "./ContentDefinition";
import type { TextComponentProps } from "../../../../components/text-component/TextComponentProps";
import TitleBar from "../../../../components/title-bar/TitleBar";
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import { RelativeType } from "../../../../shared/utils/RelativeType";
import IntroTeenager from "./IntroTeenager";
import BackButton from "../../../../components/back-button/BackButton";
import { ImageListOptions } from "../../../../components/list-options/image-list-options/ImageListOptions";

export interface VisitasYContactoProps extends DefinitionProps {
  type: RelativeType;
};

export default function VisitasYContacto({ type }: VisitasYContactoProps) {

  const items = getContentDefinition(type).map(i => ({ title: (i.props as TextComponentProps).title, ...i }));

  return (
    <div className="visitas-y-contacto">
      <div className="h-100">
        <div className="fp-intro-sticky">
          <BackButton />
          <TitleBar title={"Visitas y comunicación"} />
        </div>
        <div className="list common-layout-margin text-justify mt-5 mb-5">
          {
            type == RelativeType.Adult
              ? <></>
              : <IntroTeenager />
          }
          <ImageListOptions items={items} />
        </div>
      </div>
    </div>
  );
}
