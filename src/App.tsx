import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Application from "./Application";
import Home from './Home';
import MainApplication from './MainApplication';

function App() {
  return (
    <main className="">
      <Router>
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/app" element={<Application />} />
            <Route path="/app-main" element={<MainApplication />} />

            {/* <Route path="/app-submit" element={<MainPage />} /> */}

          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
