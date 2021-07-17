import styled from 'styled-components/native';

export const Border = styled.View`
  border-color: #ebeff3;
  border-bottom-width: 7px;
`;

export const ViewContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:20px;
`;

export const Text = styled.Text`
  font-family:Roboto_700Bold;
  font-size: 19px;
  line-height: 23px;
  text-align: center;
`;

export const Button = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  width: 90%;
  height: 54px;
  background: #2196f3;
  border-radius: 100px;
`;

export const Label = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #fff;
  font-size: 18px;
`;
