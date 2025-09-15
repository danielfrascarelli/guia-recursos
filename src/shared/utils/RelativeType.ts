export const RelativeType = {
  Adult: 1,
  Teenager: 2,
} as const;

export type RelativeType = typeof RelativeType[keyof typeof RelativeType];

export function getRelativeTypeName(type: RelativeType): string {
  return type == RelativeType.Adult ? "adulto" : "adolescente";
}