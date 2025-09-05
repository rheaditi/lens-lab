export const DistanceUnitFactor = {
  m: 1,
  ft: 3.28084,
  cm: 100,
  in: 39.3701,
} as const;

export const DistanceUnit = Object.keys(DistanceUnitFactor) as (keyof typeof DistanceUnitFactor)[];
