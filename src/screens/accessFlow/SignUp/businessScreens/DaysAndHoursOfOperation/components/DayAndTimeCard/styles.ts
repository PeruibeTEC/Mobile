import styled from 'styled-components/native';
import colors from '../../../../../../../styles/colors';
import fonts from '../../../../../../../styles/fonts';
import normalize from '../../../../../../../utils/normalizeSize';
import pixelToDP from '../../../../../../../utils/pixelToDP';
import { sizes } from '../../../../../../../utils/predefinedSizes';

export const Container = styled.View`
  width: 100%;
  padding: ${sizes.height.dp24}px ${sizes.width.dp20}px;
  margin: ${sizes.height.dp8}px 0;
  align-items: flex-end;

  border: 1px solid ${colors.light.gray300};
  border-radius: ${normalize(8)}px;
`;

export const Delete = styled.TouchableOpacity`
  position: absolute;
  padding: ${sizes.height.dp8}px;
  border-top-right-radius: ${normalize(8)}px;
  border-bottom-left-radius: ${normalize(24)}px;
  background-color: #e8265e;
`;

export const Time = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeContainer = styled.View`
  flex: 1;
`;

export const ContainerPicker = styled.View`
  width: 100%;
`;

export const PickerStyle = styled.View`
  width: 100%;
  height: ${pixelToDP.height(52)}px;
  padding-left: ${sizes.width.dp20}px;

  font-size: ${normalize(16)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};

  border: 1px solid ${colors.light.gray400};
  border-radius: ${normalize(8)}px;
`;

export const Label = styled.Text`
  margin-bottom: ${sizes.height.dp4}px;

  font-size: ${normalize(16)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray400};
`;

export const InputTimeContainer = styled.TouchableOpacity`
  width: 100%;
  padding: ${sizes.height.dp8}px 0;
  align-items: center;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colors.light.gray400};
  border-radius: ${normalize(8)}px;
`;

export const InputTimeText = styled.Text`
  margin-right: ${sizes.height.dp4}px;

  font-size: ${normalize(24)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin: ${sizes.height.dp16}px 0;
  background-color: ${colors.light.gray100};
`;

export const InputDayContainer = styled.TouchableOpacity`
  width: 100%;
  padding: ${sizes.height.dp8}px ${sizes.width.dp20}px;
  align-items: center;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${colors.light.gray400};
  border-radius: ${normalize(8)}px;
`;

export const InputDayText = styled.Text`
  margin-right: ${sizes.height.dp4}px;

  font-size: ${normalize(16)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};
`;
