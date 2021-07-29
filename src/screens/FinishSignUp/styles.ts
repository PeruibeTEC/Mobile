import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Title = styled.Text`
  margin-bottom: 24px;
  color: black;

  font-family: 'Inter_600SemiBold';
  font-weight: 600;
  font-size: 32px;
  text-align: center;
`;

export const TextSelect = styled.Text`
  color: #666666;
  font-size: 18px;
  font-family: 'Inter_500Medium';
  margin-bottom: 24px;
`;

export const ImagePickerGallery = styled.View`
  height: 160px;
  width: 160px;
  border-radius: 80px;
  background: #e9e9e9;
  border: 5px #d9d8d8;
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 5px #d9d8d8;
`;
