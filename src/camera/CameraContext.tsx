import { createContext } from 'react';
import { type ComboboxItem } from '@mantine/core';
import { Cameras, Lenses, type CameraId, type LensId } from './constants';

export type CameraConfig = {
  c1: CameraId;
  c2: CameraId;
  lens1: LensId;
  lens2: LensId;
  setLens1: (lens: LensId) => void;
  setLens2: (lens: LensId) => void;
  lensOptions: ComboboxItem[];
};

export const CameraContext = createContext<CameraConfig>({
  c1: Cameras[0].id,
  c2: Cameras[1].id,
  lens1: Lenses[0].id,
  lens2: Lenses[1].id,
  setLens1: () => {},
  setLens2: () => {},
  lensOptions: [],
});
