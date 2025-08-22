import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { FirebaseProvider } from './components/Context/firebase.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter >
<FirebaseProvider>
   <App />

</FirebaseProvider>
 
</BrowserRouter >
  </StrictMode>,
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';
// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </StrictMode>
// );
