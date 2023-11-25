import React, { createContext } from 'react';
import CompA from './CompA';

const firstname = createContext();
const lastname=createContext();

function App() {
  const neeraj = "Neeraj"; // Replace this with the actual value you want to provide
  const joshi='joshi';
  return (
    <>
      <firstname.Provider value={neeraj}>
        <lastname.Provider value={joshi}>
        <CompA />
        </lastname.Provider>
      </firstname.Provider>
    </>
  );
}

export default App;
export { firstname,lastname };
