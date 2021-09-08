import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';

import GoogleButton from '../components/GoogleButton';
import Input from '../components/Input';
import { Container, Divider, DividerText, Form, Header, Line } from './styles';

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
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
