import { Container } from "react-bootstrap";

type IntroScreenProps = {
  onBack?: () => void;
  onNext?: () => void;
};

export default function Introduction({ onBack, onNext }: IntroScreenProps) {
  return (
    <Container fluid className="p-0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        blandit, ipsum quis sodales lobortis, tortor mi mattis lacus, vitae
        rhoncus massa velit non purus. Vivamus imperdiet, mauris sit amet
        luctus consequat, erat arcu vestibulum nunc, at ullamcorper enim
        sapien vel odio. Cras varius luctus lorem, sed pretium nibh
        sollicitudin ac. Proin at turpis id libero tempor cursus. Nulla
        facilisi. Phasellus faucibus dapibus dapibus. Aenean ut arcu risus.
      </p>
      <p>
        Sed euismod mi at ante luctus, tempus gravida lorem aliquet. Integer
        semper molestie dui, non lacinia risus feugiat a. Curabitur dictum
        urna a nisl fermentum, non volutpat ligula sagittis. Donec ut velit
        sit amet erat finibus elementum. Aenean ac lorem vel arcu imperdiet
        dignissim. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Suspendisse id pellentesque arcu.
      </p>
      <p>
        Pellentesque dictum, neque eget pulvinar mattis, nisl urna tincidunt
        arcu, id interdum odio augue et nunc. Vivamus ut semper nisi. Sed
        cursus, libero nec rhoncus accumsan, ligula dolor rutrum augue, non
        efficitur lorem felis a nisl. Integer efficitur viverra arcu nec
        mollis. Quisque id mi nec lacus maximus efficitur non vitae turpis.
      </p>
    </Container>
  );
}
