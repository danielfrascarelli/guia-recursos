import { type ContentDefinition, registry } from "../components/ItemDefinition";

export function RenderContent({ items }: { items: ContentDefinition[] }) {
    return (
        <>
            {items.map((it, i) => {
                const Cmp = registry[it.componentType] as React.ComponentType<any>;
                return <Cmp key={i} {...it.props} />;
            })}
        </>
    );
}


