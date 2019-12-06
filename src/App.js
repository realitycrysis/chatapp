import React from 'react';
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

import './App.css';
import Chat from './Chat';
// import UserList from './UserList';
import Login from './Login';

const instanceLocator = 'v1:us1:028f21bd-659f-44ba-bcfd-65ee21d34eeb';

const tokenProvider = new TokenProvider({
  url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/028f21bd-659f-44ba-bcfd-65ee21d34eeb/token',
});

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId={userId}
            >
              {/* <UserList userId={userId}/> */}
              <Chat otherUserId={otherUserId} />
            </ChatkitProvider>
          </div>
        </>
      ) : (
        <Login />
      )}
      <div className="App__backdrop">
      </div>
    </div>
  );
}

export default App;
