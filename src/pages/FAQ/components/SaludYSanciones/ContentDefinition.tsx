import type { ContentDefinition } from "../../../../components/ItemDefinition";

export function getContentDefinition(): ContentDefinition[] {
  const items = [
    {
      id: "5",
      variant: "orange",
      url: "5",
      componentType: "TextComponent",
      props: {
        title: "¿Cuándo la persona detenida presenta problemas de salud qué corresponde hacer desde el INR?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
    },
    {
      id: "6",
      variant: "green",
      url: "6",
      componentType: "TextComponent",
      props: {
        title: "De ser necesario, ¿es posible que se habiliten los cuidados de la familia?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
    },
    {
      id: "7",
      variant: "orange",
      url: "7",
      componentType: "TextComponent",
      props: {
        title: "En caso de ser sancionada la persona, ¿puede ingresar al menos un familiar o queda incomunicado?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
    }
  ] satisfies ContentDefinition[];
  return items;
}
