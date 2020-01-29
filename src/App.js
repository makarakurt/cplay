import React from 'react';
import AuthContainer from './component/AuthContainer';
import Callback from './component/Callback';
function App() {
  let body = null;
  let href = new URL(window.location.href);
  if (href.searchParams.get('code')) {
    body = <Callback />;
  } else {
    body = <AuthContainer />;
  }
  return body;
}

export default App;
