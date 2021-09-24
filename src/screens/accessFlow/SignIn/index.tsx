import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { sizes } from '../../../utils/predefinedSizes';
import GoogleButton from '../components/GoogleButton';
import Input from '../components/Input';
import Button from '../../../components/Button';
import {
  ButtonGroup,
  Container,
  Divider,
  DividerText,
  InputGroup,
  Header,
  Line,
  ForgotPassword,
  CreateNewAccount,
  Label,
  NewAccount,
  KeyboardAvoidingView,
  Content,
} from './styles';

import Logo from '../../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header>
          <Logo width={212} />
        </Header>

        <Content>
          <GoogleButton text="Login com Google" />

          <Divider>
            <Line />
            <DividerText>OU FAÇA LOGIN</DividerText>
            <Line />
          </Divider>

          <InputGroup>
            <Input
              label="E-mail"
              keyboardType="email-address"
              style={{ marginBottom: sizes.height.dp20 }}
            />
            <Input returnKeyType="done" label="Senha" secureTextEntry />

            <TouchableOpacity activeOpacity={0.3}>
              <ForgotPassword>Esqueci minha senha</ForgotPassword>
            </TouchableOpacity>
          </InputGroup>
        </Content>

        <ButtonGroup>
          <Button title="Entrar" />

          <CreateNewAccount>
            <Label>Ainda não tem cadastro?</Label>
            <TouchableOpacity>
              <NewAccount>Crie uma conta</NewAccount>
            </TouchableOpacity>
          </CreateNewAccount>
        </ButtonGroup>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
