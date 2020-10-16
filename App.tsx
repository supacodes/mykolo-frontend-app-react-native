import React, { Fragment } from 'react';

import PasswordPage from './src/screens/Password';
import EmailPage from './src/screens/Email';
import BasicInfoPage from './src/screens/BasicInfo';
import EmergencyContactPage from './src/screens/EmergencyContact';
import EducationPage from './src/screens/Education';
import NextOfKinPage from './src/screens/NextOfKin';
import PasswordRecoveryPage from './src/screens/PasswordRecovery';

const App: React.FC = () => {
  return (
    <Fragment>
      {/* <EmailPage /> */}
      {/* <PasswordPage /> */}
      {/* <BasicInfoPage /> */}
      {/* <EmergencyContactPage /> */}
      {/* <EducationPage /> */}
      {/* <NextOfKinPage /> */}
      <PasswordRecoveryPage />
    </Fragment>
  );
};

export default App;
