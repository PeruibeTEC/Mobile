import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
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
} from './styles';

import Logo from '../../../assets/logo.svg';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  async function handleChooseYourProfile() {
    navigation.navigate('ChooseYourProfile');
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header>
          <Logo width={212} />
        </Header>

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
            style={{ marginBottom: 20 }}
          />
          <Input returnKeyType="done" label="Senha" secureTextEntry />

          <TouchableOpacity activeOpacity={0.3}>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </TouchableOpacity>
        </InputGroup>

        <ButtonGroup>
          <Button title="Entrar" onPress={handleChooseYourProfile} />

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
