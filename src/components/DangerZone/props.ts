export interface IDangerZone {
  toCheck: string | null | undefined;
  onClick: () => void;
  text: string | null | undefined;
  className?: string;
}
