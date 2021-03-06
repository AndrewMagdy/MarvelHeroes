import '@babel/polyfill'; // Do we want to run the tests with the polyfills?

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// See Event: 'unhandledRejection' https://nodejs.org/api/process.html#process_event_unhandledrejection
// See Bluebird Error management configuration http://bluebirdjs.com/docs/api/error-management-configuration.html
//
// Node.js error:
// (node:38141) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
// This error originated either by throwing inside of an async function without a catch block,
// or by rejecting a promise which was not handled with .catch(). (rejection id: 4)
// (node:38141) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated.
// In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
//
process.on('unhandledRejection', (reason: Error | any, _promise: Promise<any>) => {
  console.error('Unhandled promise rejection:', reason);
});
