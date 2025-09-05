import { SegmentedControl, Stack, Flex } from '@mantine/core';
import { useState } from 'react';
import { type CameraId } from '../camera/constants';
import { useCameraContext } from '../camera/useCameraContext';

export const Hyperfocal = () => {
  const { c1, c2, cameraData } = useCameraContext();
  const [camera, setCamera] = useState<CameraId>(c1);

  return (
    <div>
      <Stack>
        <Flex>
          <SegmentedControl
            data={[
              {
                value: c1,
                label: cameraData[c1].name,
              },
              {
                value: c2,
                label: cameraData[c2].name,
              },
            ]}
            value={camera}
            onChange={(value) => setCamera(value as CameraId)}
          />
        </Flex>
      </Stack>
      Hyperfocal
    </div>
  );
};
