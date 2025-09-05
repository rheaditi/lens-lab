import { Fieldset, NativeSelect, Stack } from '@mantine/core';
import { useCameraContext } from './useCameraContext';
import { Camera, type LensId } from './constants';

export const CameraForm = () => {
  const { lensOptions, lens1, lens2, setLens1, setLens2 } = useCameraContext();

  return (
    <Stack py='md'>
      <Fieldset legend={Camera.a7c.name}>
        <NativeSelect
          data={lensOptions}
          variant='filled'
          value={lens1}
          onChange={(event) => setLens1(event.currentTarget.value as LensId)}
        />
      </Fieldset>
      <Fieldset legend={Camera.a7c2.name}>
        <NativeSelect
          data={lensOptions}
          variant='filled'
          value={lens2}
          onChange={(event) => setLens2(event.currentTarget.value as LensId)}
        />
      </Fieldset>
    </Stack>
  );
};
