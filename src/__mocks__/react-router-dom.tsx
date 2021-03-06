import React from 'react';
import * as ReactRouter from 'react-router-dom';

// See Testing React Router apps with Jest and Enzyme https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
// See https://github.com/Maxim-Filimonov/building-applications-with-react-redux-in-es6/blob/1f8d691e393cded2572bd0d44a159449c6c5fd06/src/routes.test.js

(ReactRouter.HashRouter as any) = ({ children }: React.Props<ReactRouter.HashRouterProps>) => (
  <div>{children}</div>
);

module.exports = ReactRouter;
