import { AppShell } from '@mantine/core';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';

import { useDisclosure } from '@mantine/hooks';

import { ActionIcon, Group, Typography } from '@mantine/core';
import { IconCameraCode } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';
import AppRoutes from './Routes';
import { CameraForm } from './camera/CameraForm';
import { CameraContextProvider } from './camera/CameraContextProvider';

function TabNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const value = pathname === '/' ? 'depth' : pathname.replace(/^\//, '');
  return (
    <Tabs value={value} onChange={(value) => navigate(`/${value}`)}>
      <Tabs.List>
        <Tabs.Tab value='depth'>Depth of Field</Tabs.Tab>
        <Tabs.Tab value='fov'>Field of View</Tabs.Tab>
        <Tabs.Tab value='hyperfocal'>Hyperfocal</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const getCameraIcon = (mobile: boolean) => {
    const opened = mobile ? mobileOpened : desktopOpened;
    return (
      <ActionIcon
        variant='gradient'
        aria-label='Gradient action icon'
        gradient={{ from: 'grape', to: 'orange', deg: opened ? 180 : 90 }}
        size='md'
        {...(mobile ? { hiddenFrom: 'sm' } : { visibleFrom: 'sm' })}
        onClick={mobile ? toggleMobile : toggleDesktop}
      >
        <IconCameraCode size={16} />
      </ActionIcon>
    );
  };

  return (
    <BrowserRouter>
      <CameraContextProvider>
        <AppShell
          padding='md'
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
          }}
        >
          <Tabs defaultValue='gallery'>
            <AppShell.Header>
              <Group h='100%' px='md' py={0}>
                {getCameraIcon(true)}
                {getCameraIcon(false)}
                <Typography>
                  <h1>Lens Lab</h1>
                </Typography>
                <TabNav />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar>
              <CameraForm />
            </AppShell.Navbar>
            <AppShell.Main>
              <AppRoutes />
            </AppShell.Main>
          </Tabs>
        </AppShell>
      </CameraContextProvider>
    </BrowserRouter>
  );
}

export default App;
