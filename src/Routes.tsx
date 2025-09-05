import { Route, Routes } from 'react-router-dom';
import { Hyperfocal } from './hyperfocal';

const DepthPage = () => {
  return <div>Depth</div>;
};

const FovPage = () => {
  return <div>Fov</div>;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/depth' element={<DepthPage />} />
      <Route path='/fov' element={<FovPage />} />
      <Route path='/hyperfocal' element={<Hyperfocal />} />
      <Route path='*' element={<DepthPage />} /> {/* default */}
    </Routes>
  );
}
