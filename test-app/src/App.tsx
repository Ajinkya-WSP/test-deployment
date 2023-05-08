import React from 'react';
import Viewer from './Viewer.js';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='viewer-window'>
            <Viewer
              runtime={{ accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJFa2dpRTRiSlZYcnp6QWVBdzliR2N3UDB3T1VVa3VHViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJObmQ3blNxRk9UR2dBMU8zV2FEY0tPVWp4VjhtcUM1TVlVd3VQaGg1bzFDQ2JPNWQ5ekdRZ0RpNzFNb1AwY2d5IiwiZXhwIjoxNjgzNTczMzg3fQ.BbcawSMwgdrzOgItoXnBD2SwOlvglSJsaEdp2J3ejoXPvf5zGlP_2ERRixCkVB2v-_FY5wrq9eoesw_wYxCXjTU2N1TOxkp7I9UkkQqKR5M5MEVcacEHB7C3f70wBs-HLP8LszuO-aBVGp8v-tNfaTzoQ62-Fzog4uFqCzabWP63dmjTJ3VwmVRLjIntWEiMSQ-HEtbf_OEhIBmy3yS-vZgak2nLNf0Aq-tf14mwDwOBhH-ekPbexP5Re_kdj-7HtPfyl0AU7u20mQCFGKAwotsX3YBUqFkcNeUGUfwqG_8c5UhTgGbdCmXsohaHSUM5YGu6pSyxwH8ULAlcqgDCpA' }}
              urn={'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtY29kZXBlbi1tb2RlbHMvcmFjLWFkdmFuY2VkLXNhbXBsZS1wcm9qZWN0LnJ2dA'}
            />
        </div>
      </div>
    </div>
  );
}
 
export default App;
