import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../../../components/Button';
import { sizes } from '../../../../../utils/predefinedSizes';

import {
  Container,
  Content,
  Description,
  Label,
  Login,
  LoginLink,
} from './styles';

const Contact: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Content>
        <Description>
          Como os usuários poderão entrar em contato contigo
        </Description>

        <Input label="E-mail" style={{ marginBottom: sizes.height.dp20 }} />

        <Input
          label="Telefone"
          keyboardType="numeric"
          style={{ marginBottom: sizes.height.dp20 }}
          maxLength={11}
        />

        <Input
          label="WhatsApp"
          keyboardType="numeric"
          style={{ marginBottom: sizes.height.dp20 }}
          maxLength={11}
        />

        <Button
          title="Continuar"
          style={{ marginTop: sizes.height.dp40 }}
          onPress={() => {
            navigation.navigate('');
          }}
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

export default Contact;
