
import { useContext } from 'react';
import { CameraContext } from './CameraContext';

export const useCameraContext = () => {
  return useContext(CameraContext);
};
