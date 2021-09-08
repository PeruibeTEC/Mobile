import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

import GoogleButton from '../components/GoogleButton';
import Input from '../components/Input';
import Button from '../../../components/Button';
import {
  Container,
  Divider,
  DividerText,
  Form,
  Header,
  Line,
  ForgotPassword,
  CreateNewAccount,
  Label,
  NewAccount,
} from './styles';

import Logo from '../../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Header>
          <Logo width={212} />
        </Header>
        <Form>
          <GoogleButton text="Login com Google" />

          <Divider>
            <Line />
            <DividerText>OU FAÇA LOGIN</DividerText>
            <Line />
          </Divider>

          <Input label="E-mail" keyboardType="email-address" />
          <Input returnKeyType="done" label="Senha" secureTextEntry />

          <TouchableOpacity activeOpacity={0.3}>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </TouchableOpacity>

          <Button title="Entrar" />

          <CreateNewAccount>
            <Label>Ainda não tem cadastro?</Label>
            <TouchableOpacity>
              <NewAccount>Crie uma conta</NewAccount>
            </TouchableOpacity>
          </CreateNewAccount>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
