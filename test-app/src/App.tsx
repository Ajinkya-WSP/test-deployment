import React from 'react';
import Viewer from './Viewer.js';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='viewer-window'>
            <Viewer
              runtime={{ accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJFa2dpRTRiSlZYcnp6QWVBdzliR2N3UDB3T1VVa3VHViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJpTDBweHAyTmU2YldMTlpIdzJoem9SVHJIbTlOWEJjeU80aU8wWFZqcXJQbWNoTThpSXZEVHdJQnlOTE5WWGhSIiwiZXhwIjoxNjgzNjUwNzYxfQ.emjRj-AYFEQQuC5iGDq-Cz9hWhV6FD-LYmJhkh9yf3C0Wtg2F19t9MSW4hSoddcrCZuLsiziZJhdWtfXnpyIQM4kCOOjWiNiacoGpmpaeG-m-x-qugBPNrluEriqeD_vM03c-5_qX6a9TioEalkvN9ciWMifrib4I9bUp6LVyrMinzHKMXnx0fi-0vAh9WWT46WwvuMYUotkCM2n4aiIsqwpojqzWwUjRPVK1dNFNEwewPAsSR35XF7zJx51Np7yQscjN0DGVXruxxK_G5AYohH05sYsO2RxDZRHKfKcBluEaebNWDnrEuDgtgN9Pa4QKOYpCyEVojj6nzKZsWy4Pg' }}
              urn={'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtY29kZXBlbi1tb2RlbHMvcmFjLWFkdmFuY2VkLXNhbXBsZS1wcm9qZWN0LnJ2dA'}
            />
        </div>
      </div>
    </div>
  );
}
 
export default App;
