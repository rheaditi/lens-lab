import { Route, Routes } from 'react-router-dom';

const DepthPage = () => {
  return <div>Depth</div>;
};

const FovPage = () => {
  return <div>Fov</div>;
};

const HyperfocalPage = () => {
  return <div>Hyperfocal</div>;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/depth' element={<DepthPage />} />
      <Route path='/fov' element={<FovPage />} />
      <Route path='/hyperfocal' element={<HyperfocalPage />} />
      <Route path='*' element={<DepthPage />} /> {/* default */}
    </Routes>
  );
}
