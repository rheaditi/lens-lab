export const DistanceUnitFactor = {
  m: 1,
  ft: 3.28084,
  cm: 100,
  in: 39.3701,
} as const;

export type DistanceUnit = keyof typeof DistanceUnitFactor;

export const DistanceUnits = Object.keys(DistanceUnitFactor) as DistanceUnit[];
