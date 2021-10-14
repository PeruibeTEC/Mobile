import React, { useState } from 'react';
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

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [emailError, setEmailError] = useState({ show: false, message: '' });
  const [passwordError, setPasswordError] = useState({
    show: false,
    message: '',
  });

  const checkInputs = () => {
    const check = () => {
      if (!email) {
        setEmailError({ show: true, message: 'Preencha este campo' });
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setEmailError({ show: true, message: 'Insira um Email válido' });
      }
      if (!password) {
        setPasswordError({ show: true, message: 'Preencha este campo' });
      }
    };

    if (
      !email ||
      !password ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      check();
      return;
    }

    navigation.navigate('Home');
  };

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
              value={email}
              onChangeText={text => {
                setEmail(text);
                setEmailError({ show: false, message: '' });
              }}
              keyboardType="email-address"
              style={{ marginBottom: sizes.height.dp20 }}
              error={emailError}
            />

            <Input
              value={password}
              onChangeText={text => {
                setPassword(text);
                setPasswordError({ show: false, message: '' });
              }}
              returnKeyType="done"
              label="Senha"
              secureTextEntry
              error={passwordError}
            />

            <TouchableOpacity activeOpacity={0.3}>
              <ForgotPassword>Esqueci minha senha</ForgotPassword>
            </TouchableOpacity>

            <Button
              title="Entrar"
              style={{ marginTop: sizes.height.dp40 }}
              onPress={checkInputs}
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
