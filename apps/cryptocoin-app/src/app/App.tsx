import React from 'react';
import { RecoilRoot } from 'recoil'; 

import Navigator from './navigator/navigator';
import Theme from './Theme';

const App = () => {
  return (
    <RecoilRoot>
      <Theme>
        {(theme) => (
          <Navigator theme={theme}/>
        )}
      </Theme>
    </RecoilRoot>
  );
};

export default App;
