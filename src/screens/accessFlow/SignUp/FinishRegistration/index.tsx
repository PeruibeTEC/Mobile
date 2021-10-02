import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import Button from '../../../../components/Button';
import { sizes } from '../../../../utils/predefinedSizes';

import {
  Container,
  Content,
  Description,
  Label,
  Login,
  LoginLink,
  TextArea,
  Upload,
  UploadIcon,
} from './styles';

const FinishRegistration: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Content>
        <Description>Escolha uma foto para seu perfil</Description>

        <Upload activeOpacity={0.7}>
          <UploadIcon name="cloud-upload-outline" />
        </Upload>

        <TextArea
          multiline
          numberOfLines={5}
          placeholder="Escreva uma pequena bio"
        />

        <Button
          title="Finalizar cadastro"
          style={{ marginTop: sizes.height.dp40 }}
          onPress={() => navigation.navigate('Home')}
        />
      </Content>

      <Login>
        <Label>Já tem um cadastro?</Label>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseAnOptionSignIn')}
        >
          <LoginLink>Faça login</LoginLink>
        </TouchableOpacity>
      </Login>
    </Container>
  );
};

export default FinishRegistration;
