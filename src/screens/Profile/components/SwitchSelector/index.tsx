import React from 'react';
import { TextStyle } from 'react-native';

import SwitchSelectorComponent, {
  ISwitchSelectorProps,
} from 'react-native-switch-selector';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

interface IProps extends ISwitchSelectorProps {}

const SwitchSelector: React.FC<IProps> = props => {
  const textStyle: TextStyle = {
    fontFamily: fonts.text,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
  };
  return (
    <SwitchSelectorComponent
      initial={0}
      textColor={'#42A5F5'}
      selectedColor={colors.white1}
      buttonColor={'#42A5F5'}
      borderColor={'#42A5F5'}
      backgroundColor={colors.white1}
      textStyle={textStyle}
      selectedTextStyle={textStyle}
      buttonMargin={4}
      valuePadding={-3}
      hasPadding
      accessibilityLabel="switch-selector"
      {...props}
    />
  );
};

export default SwitchSelector;
