import React, { ReactElement, useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Title,
  Content,
  ForgotPassword,
  ContainerInputs,
  CreateAccount,
  CreateAccountContainer,
} from './styles';

export function SignIn(): ReactElement {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleSignUp() {
    navigation.navigate('ChooseYourType');
  }

  async function handleSignIn() {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );

    if (!email || !password) {
      Alert.alert('Atenção !!', 'Preencha todos os campos 🧐');
      return;
    }

    if (!pattern.test(email)) {
      Alert.alert('Atenção !!', 'Coloque um email válido 🧐');
      return;
    }

    navigation.navigate('Home');
  }

  return (
    <SafeAreaView
      style={{
        minHeight: Math.round(Dimensions.get('window').height - 200),
      }}
    >
      <KeyboardAvoidingView>
        <Content>
          <Title>Login</Title>
          <ContainerInputs>
            <Input
              defaultValue=""
              icon="at"
              name="at"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <View
              style={{
                marginTop: 16,
                marginBottom: 52,
              }}
            >
              <Input
                defaultValue=""
                icon="lock"
                name="lock"
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
              />
            </View>
          </ContainerInputs>

          <Button onPress={handleSignIn} title="Entrar" />

          <TouchableOpacity activeOpacity={0.5}>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </TouchableOpacity>
        </Content>

        <CreateAccountContainer>
          <TouchableOpacity onPress={handleSignUp} activeOpacity={0.5}>
            <CreateAccount>Criar sua Conta</CreateAccount>
          </TouchableOpacity>
        </CreateAccountContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
