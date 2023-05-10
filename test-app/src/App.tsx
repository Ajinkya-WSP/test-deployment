import React from 'react';
import Viewer from './Viewer.js';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='viewer-window'>
            <Viewer
              runtime={{ accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJFa2dpRTRiSlZYcnp6QWVBdzliR2N3UDB3T1VVa3VHViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJzeVlmaXRGZHp0eElzQWcwczlleGYyeWRBQUhXM1hoVFc1aGVhaWkzOVR5Z3ptZVJJalRtV2FZS0hha2JHb0o2IiwiZXhwIjoxNjgzNzQ3Mzg5fQ.DSi9j-Y8F7Q90jLfjj6Ugj0PsK2LCx6Wfp67EMiSViJcddRdhdvgNW1sUC5m8PggLkmRx2iQOt7pT96zToGieSl6T04dXA9dnAMpOINikekYyaUkwrmBMAo6kWrZCrdwFKsszDh13KuwHSqW-odQcZHzNFLrDsCQ6SvW2lEwYf3SVbU3uRbvmewQcC9y5lyI3O_axeWyWwAlSNypKO1qf5E_bbhj8xZWEsi4ZS0LCyaruCJ7wgTaRsgMxOihTW-MfjVo20vzzBzkBZA31xwtQOOBWUDqAQm0ievdcrN8zeAjvp4ItL90ATmQDsibuoCJMyQBUz1822CrQSdGl9Od4A' }}
              urn={'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtY29kZXBlbi1tb2RlbHMvcmFjLWFkdmFuY2VkLXNhbXBsZS1wcm9qZWN0LnJ2dA'}
            />
        </div>
      </div>
    </div>
  );
} 
 
export default App;
