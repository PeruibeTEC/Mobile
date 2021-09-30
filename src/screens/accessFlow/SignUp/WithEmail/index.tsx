import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';
import { sizes } from '../../../../utils/predefinedSizes';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../../../components/Button';

import {
  Container,
  Content,
  Form,
  KeyboardAvoidingView,
  Label,
  Login,
  LoginLink,
  Title,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header />

        <Content>
          <Title>Cadastrar-se</Title>

          <Form>
            <Input
              label="Nome"
              keyboardType="default"
              style={{ marginBottom: sizes.height.dp20 }}
            />

            <Input
              label="E-mail"
              keyboardType="email-address"
              style={{ marginBottom: sizes.height.dp20 }}
            />

            <Input returnKeyType="done" label="Senha" secureTextEntry />

            <Button
              title="Continuar"
              style={{ marginTop: sizes.height.dp40 }}
              onPress={() => navigation.navigate('FinishRegistration')}
            />
          </Form>
        </Content>

        <Login>
          <Label>Já tem um cadastro?</Label>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseAnOptionSignIn')}
          >
            <LoginLink>Faça login</LoginLink>
          </TouchableOpacity>
        </Login>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
