import React from 'react';
import { useHistory } from 'react-router-dom'

export default () => (
  <div>
    { useHistory().push('/sistema') }
  </div>
);
