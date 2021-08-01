import styled from 'styled-components/native';
import { View } from 'react-native';

export const CircleAttuation = styled.View`
  border-width: 3;
  border-color: #2196f3;
  background-color: #2195f373;
  height: 100px;
  width: 100px;
  border-radius: 100000;
  align-items: center;
  justify-content: center;
`;

export const MarkerStylized = styled(View)`
  background-color: #2196f3;
  height: 34px;
  width: 34px;
  border-top-left-radius: 0;
  border-top-right-radius: 17;
  border-bottom-right-radius: 17;
  border-bottom-left-radius: 17;
  transform: rotate(225deg);
  align-items: center;
  justify-content: center;
`;
