import React from 'react';
import Viewer from './Viewer.js';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='viewer-window'>
            <Viewer
              runtime={{ accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJFa2dpRTRiSlZYcnp6QWVBdzliR2N3UDB3T1VVa3VHViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJ1Q3BneXpqdDh6MW5VaU51Sk5WZVBnYUxuZ3lObmtJdGQ2TjZ0bDZhRGJ4MmtwZG0zZHpmOEdlVTFlMkdvbkNPIiwiZXhwIjoxNjgzNTYwOTA4fQ.O5jdER_NebuWMU944JKDMh5nvMPQS6oF9Yx-SbelhfrBZ3JYdplhZ4wxvidr7bBYdZBjYTdZnVitjyCy8Z1XPqZQii5hWduUdb0gnzbFJptmJhHIn04t1hhGv5oolvqoNvQdU1bhfkfMXMEX9J693Uzab_ai6fD0jxJN1CvnJOmdLe81TibYEkfLZYALYRmOFs4lbAWKJOdFNC6VqulJJGaWjpAb7nYBXnsXFfqCaDY-_RC_8pkNDqa5gnmKWVo2WMXH0G0PRJvh2gCZt1ccSBC0RIOKBN-neHqvnF3HzyS3-awcBYx0PXi_XUhJu1SYpNhAY50flKk81sNOKaEUyw' }}
              urn={'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtY29kZXBlbi1tb2RlbHMvcmFjLWFkdmFuY2VkLXNhbXBsZS1wcm9qZWN0LnJ2dA'}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
