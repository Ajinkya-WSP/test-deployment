import React from 'react';
import Viewer from './Viewer.js';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='viewer-window'>
            <Viewer
              runtime={{ accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJFa2dpRTRiSlZYcnp6QWVBdzliR2N3UDB3T1VVa3VHViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiIxdmF5bzFNYzI5dUVjMUdnajh0emw4ZTVHMjk4dXg4VFRuRzNvQldDY0huQmQ2ZnF2c1l6cjRnN2JycThKM3FJIiwiZXhwIjoxNjgzNjQ2NTczfQ.g0tTQtsCR9VXJsOFXMYF3NTsu9B2bcmSNEsFk8yuawqh_bmSm9R9lJ1ijRnQVOCaignBKnEtpi4qC5puNjbuqfRv7tLN0w1zGudEAbyOm2GLP2A-mNkc7fXoD86TQe3SILR6oLITFL6wLVknI5vElbCUdY6s08TWz2KFMWq_zyeEBnY8SkEJ4GWaayx6sKVaHepOsPgrM17VaTLOiogV9_6svnVxTto6Kiwtgj8hG0fEqy31XFZShE3jeRAl4-Wxl-RKtchgZg7LPN97Swpzc6FPFqZg7iCvHy-rVOxG8qV29iXtERuWliv7grXny5Zm6c1ZM4aQOMuJlAHiglcS1Q' }}
              urn={'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtY29kZXBlbi1tb2RlbHMvcmFjLWFkdmFuY2VkLXNhbXBsZS1wcm9qZWN0LnJ2dA'}
            />
        </div>
      </div>
    </div>
  );
}
 
export default App;
