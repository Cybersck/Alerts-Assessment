// Core
import './sass/index.scss';
import { Routes, Route } from 'react-router-dom';
// Model & Helpers


// View
import { AlertManager } from '@containers/Containers';
import { AlertsExample } from '@components/Components';

function App() {
  return (
    <div className="body-container">
    <AlertManager />
    {/* only using routes here for simulated 'navigating' upon clicking alerts which contain a link. all routes will display AlertsExample */}
    <Routes>
      <Route path='/*' element={<AlertsExample />} />
    </Routes>
    </div>
  )
}

export default App;
