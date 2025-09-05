import { useState } from 'react';
import { type ComboboxItem } from '@mantine/core';
import { Cameras, Lens, Lenses, Camera } from './constants';
import { CameraContext } from './CameraContext';

export const LensOptions: ComboboxItem[] = Lenses.map((lens) => ({
  label: lens.name,
  value: lens.id,
}));

export const CameraContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lens1, setLens1] = useState(Lenses[0].id);
  const [lens2, setLens2] = useState(Lenses[1].id);

  return (
    <CameraContext.Provider
      value={{
        c1: Cameras[0].id,
        c2: Cameras[1].id,
        lens1,
        lens2,
        setLens1,
        setLens2,
        lensOptions: LensOptions,
        cameraData: Camera,
        lensData: Lens,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};
