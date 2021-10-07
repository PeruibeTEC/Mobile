import React from 'react';
import { TextStyle } from 'react-native';

import SwitchSelectorComponent, {
  ISwitchSelectorProps,
} from 'react-native-switch-selector';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';

type IProps = ISwitchSelectorProps;

const SwitchSelector: React.FC<IProps> = props => {
  const textStyle: TextStyle = {
    fontFamily: fonts.robotoRegular,
    fontSize: normalize(16),
  };
  return (
    <SwitchSelectorComponent
      initial={0}
      textColor={colors.light.primary500}
      selectedColor={colors.light.primary50}
      buttonColor={colors.light.primary500}
      borderColor={colors.light.primary700}
      backgroundColor={colors.light.background}
      textStyle={textStyle}
      selectedTextStyle={textStyle}
      buttonMargin={6}
      valuePadding={-5}
      hasPadding
      accessibilityLabel="switch-selector"
      {...props}
    />
  );
};

export default SwitchSelector;
