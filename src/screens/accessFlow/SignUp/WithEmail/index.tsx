import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import {} from './styles';

const SignUp: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        minHeight: Math.round(Dimensions.get('window').height - 200),
      }}
    />
  );
};

export default SignUp;
