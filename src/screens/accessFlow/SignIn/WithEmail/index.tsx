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
  CreateNewAccount,
  ForgotPassword,
  Form,
  KeyboardAvoidingView,
  Label,
  NewAccount,
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
          <Title>Login</Title>

          <Form>
            <Input
              label="E-mail"
              keyboardType="email-address"
              style={{ marginBottom: sizes.height.dp20 }}
            />

            <Input returnKeyType="done" label="Senha" secureTextEntry />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ResetPassword')}
            >
              <ForgotPassword>Esqueci minha senha</ForgotPassword>
            </TouchableOpacity>

            <Button
              title="Entrar"
              style={{ marginTop: sizes.height.dp40 }}
              onPress={() => navigation.navigate('Home')}
            />
          </Form>
        </Content>

        <CreateNewAccount>
          <Label>Ainda não tem cadastro?</Label>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseYourProfile')}
          >
            <NewAccount>Crie uma conta</NewAccount>
          </TouchableOpacity>
        </CreateNewAccount>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
