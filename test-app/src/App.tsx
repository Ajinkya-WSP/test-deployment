import React from 'react';
import Viewer from './Viewer.js';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='viewer-window'>
            <Viewer
              runtime={{ accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJFa2dpRTRiSlZYcnp6QWVBdzliR2N3UDB3T1VVa3VHViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiI3anJ4TWEwSHpoZTllMTVFZEg0TEJQMlZrNkxUS3ZvS1o3RnNCbDM2UVhCeThVU2VsTWVoZXNjMG1CUnNVaDgwIiwiZXhwIjoxNjgzNzM3NjM5fQ.E3B1lGjNS2vxrNgNscz9OHBC0KjVoe6qpSUBLLwelq2lU2McQGokpu60ZL4iRef8w__eL_4_9cuU0NXEqJ1HC8Y0TxXjVyP47BObdbRfv8IAcX4nBUIcGGiv-DB2UIsQFdMy66oRHZDI4TMB0Nx3tZvv54bTH-VGGLWtp0NxB4sni-hAeRpsfDFUHkq6w_E3tXMJhQHdJrhScxpoEWJGC32P44NOym27tybg7fvi4bTDMqOr9-CTboQs9ss06bKkCGL-K9bZDrpCpvhzTJirwOVDNcgT4vqbTdqeoFNqAMjS1NJ0GNRsFHODUMGq6wpu1GbvR_C4MHktCmVobPKBVg' }}
              urn={'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtY29kZXBlbi1tb2RlbHMvcmFjLWFkdmFuY2VkLXNhbXBsZS1wcm9qZWN0LnJ2dA'}
            />
        </div>
      </div>
    </div>
  );
}
 
export default App;
