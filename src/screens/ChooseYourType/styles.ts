import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  color: black;

  font-family: 'Inter_600SemiBold';
  font-weight: 600;
  font-size: 32px;
  text-align: center;
`;

export const Description = styled.Text`
  width: 90%;
  
  margin-bottom: 24px;
  color: #595959;

  font-family: 'Inter_500Medium';
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const Ilustration = styled.Image`
  height: 38%
`;
