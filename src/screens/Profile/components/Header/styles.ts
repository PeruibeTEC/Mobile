import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import pixelToDP from '../../../../utils/pixelToDP';
import normalize from '../../../../utils/normalizeSize';

export const Container = styled.View`
  width: 100%;
  height: ${pixelToDP.height(160)}px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  position: relative;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: ${pixelToDP.width(160)}px;
  height: ${pixelToDP.height(160)}px;
  border-radius: ${normalize(500)}px;
  margin-top: ${pixelToDP.height(10)}px;
  border-width: ${normalize(4)}px;
  border-color: ${colors.light.gray50};

  position: absolute;
  bottom: -24%;
`;
