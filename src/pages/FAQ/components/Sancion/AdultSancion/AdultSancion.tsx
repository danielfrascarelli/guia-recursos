import TitleBar from "../../../../../components/title-bar/TitleBar";
import BackButton from "../../../../../components/back-button/BackButton";
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";

export interface AdultSancionIntroProps {
};

export default function AdultSancionIntro({ }: AdultSancionIntroProps) {

  return (
    <div className="h-100">
      <div className="fp-intro-sticky">
        <BackButton />
        <TitleBar title={"Qué esperar que suceda durante una sanción"} />
      </div>
      <div className="fp-tips__container mt-4">
        <div className="fp-family-role text-justify">
          <div className="common-layout-margin mt-4">
            <p>Tenes que considerar que las visitas se van a ver afectadas, de todas formas está habilitado que una persona pueda ingresar, mediante la figura de VISITA EXCEPCIONAL una vez al mes.</p>
          </div>
          <div>
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="pt-3 pb-3">
                Es importante saber que la decisión DEPENDE DE LA DIRECCIÓN DE LA UNIDAD.
              </div>
            </IconBoxCard>
          </div>
        </div>
      </div>
    </div>
  );
}
