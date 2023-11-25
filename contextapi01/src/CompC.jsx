import React from 'react';
import { firstname, lastname } from './App';

const CompC = () => {
  return (
    <>
      <firstname.Consumer>
        {(fname) => (
          <lastname.Consumer>
            {(lname) => (
              <h1>My name is {fname} {lname}</h1>
            )}
          </lastname.Consumer>
        )}
      </firstname.Consumer>
    </>
  );
}

export default CompC;

