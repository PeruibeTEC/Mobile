import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import pixelToDP from '../../utils/pixelToDP';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${pixelToDP.height(80)}px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #12121220;
`;
