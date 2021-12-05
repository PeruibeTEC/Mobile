import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

interface IParams {
  typeProfile: string;
}

const SignUp: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as IParams;
  const { typeProfile } = routeParams;

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [nameError, setNameError] = useState({ show: false, message: '' });
  const [emailError, setEmailError] = useState({ show: false, message: '' });
  const [passwordError, setPasswordError] = useState({
    show: false,
    message: '',
  });

  const handleNavigation = () => {
    if (typeProfile === 'tourist') {
      navigation.navigate('AdditionalDataTourist', {
        typeProfile,
        name,
        email,
        password,
        isTourist: true,
      });
    } else if (typeProfile === 'business') {
      navigation.navigate('AdditionalDataBusiness', {
        typeProfile,
      });
    } else if (typeProfile === 'resident') {
      navigation.navigate('FinishRegistration', {
        typeProfile,
        name,
        email,
        password,
        isTourist: false,
      });
    }
  };

  const checkInputs = async () => {
    const check = () => {
      if (!name) {
        setNameError({ show: true, message: 'Preencha este campo' });
      }
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
      !name ||
      !email ||
      !password ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      check();
      return;
    }

    await AsyncStorage.setItem('@PeruibeTec:name', name);

    handleNavigation();
  };

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
              value={name}
              onChangeText={text => {
                setName(text);
                setNameError({ show: false, message: '' });
              }}
              label="Nome"
              style={{ marginBottom: sizes.height.dp20 }}
              error={nameError}
              autoCapitalize="words"
            />

            <Input
              value={email}
              onChangeText={text => {
                setEmail(text);
                setEmailError({ show: false, message: '' });
              }}
              label="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{ marginBottom: sizes.height.dp20 }}
              error={emailError}
              autoCompleteType="email"
            />

            <Input
              value={password}
              onChangeText={text => {
                setPassword(text);
                setPasswordError({ show: false, message: '' });
              }}
              returnKeyType="done"
              label="Senha"
              autoCapitalize="none"
              secureTextEntry
              error={passwordError}
            />

            <Button
              title="Continuar"
              style={{ marginTop: sizes.height.dp40 }}
              onPress={checkInputs}
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

export default SignUp;
