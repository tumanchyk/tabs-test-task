import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const MainPage = lazy(()=> import('../pages/MainPage'));
const ListPage = lazy(()=> import('../pages/ListPage'));
const TablePage = lazy(()=> import('../pages/TablePage'));
const ChartPage = lazy(()=> import('../pages/ChartPage'));

function App() {
  return (
    <Routes>
      <Route path='/:id?' element={<MainPage />}>
        <Route index element={<ListPage />} />
        <Route path='table' element={<TablePage />} />
        <Route path='chart' element={<ChartPage />} />
      </Route>
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
