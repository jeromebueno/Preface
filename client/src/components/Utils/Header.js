import React from 'react';
import Connection from '../User/Connection'
import UserProvider from '../../context/UserProvider';

export default function Header() {
  return (
    <div>
      <div position="static">
        <div>
          <div variant="h6">
            Preface
          </div>
          <UserProvider>
            <Connection/>
          </UserProvider>
        </div>
      </div>
    </div>
  );
}