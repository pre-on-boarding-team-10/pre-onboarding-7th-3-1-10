import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './Test';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
