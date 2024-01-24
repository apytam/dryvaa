import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Preloader from './Proloader/Preloader';

const OneDrive = React.lazy(()=> import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={ <Preloader /> }>
      <OneDrive />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();