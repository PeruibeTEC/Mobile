import React from 'react';
import { TextStyle } from 'react-native';

import SwitchSelectorComponent, {
  ISwitchSelectorProps,
} from 'react-native-switch-selector';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';

type IProps = ISwitchSelectorProps;

const Switch: React.FC<IProps> = props => {
  const textStyle: TextStyle = {
    fontFamily: fonts.robotoMedium,
    fontSize: normalize(18),
  };
  return (
    <SwitchSelectorComponent
      initial={0}
      textColor={colors.light.primary900}
      selectedColor={colors.light.primary100}
      buttonColor={colors.light.primary900}
      borderColor={colors.light.primary900}
      backgroundColor={colors.light.primary50}
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

export default Switch;
