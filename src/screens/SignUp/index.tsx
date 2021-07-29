import React, { ReactElement, useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';

import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Title, Content, ContainerInputs, Terms } from './styles';

export function SignUp(): ReactElement {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  async function handleFinishSignUp() {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );

    if (!email || !password || !name || !confirmPassword) {
      Alert.alert('Atenção !!', 'Preencha todos os campos 🧐');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Atenção !!', 'As senhas não coincidem 🧐');
      return;
    }

    if (!pattern.test(email)) {
      Alert.alert('Atenção !!', 'Coloque um email válido 🧐');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Atenção !!',
        'Pela sua segurança, a senha deve conter no mínimo 6 caracteres 🧐',
      );
      return;
    }

    if (isChecked === false) {
      Alert.alert(
        'Atenção !!',
        'Precisamos de sua confirmação dos termos de uso 🧐',
      );
      return;
    }

    const isTourist = await AsyncStorage.getItem('@PeruibeTec:isTourist');

    if (isTourist === 'false') {
      navigation.navigate('FinishSignUp');
    } else {
      navigation.navigate('ChooseYourCity');
    }
  }

  return (
    <SafeAreaView
      style={{
        minHeight: Math.round(Dimensions.get('window').height - 200),
      }}
    >
      <KeyboardAvoidingView>
        <Content>
          <Title>Cadastro</Title>
          <ContainerInputs>
            <Input
              defaultValue=""
              icon="user"
              name="user"
              placeholder="Nome"
              returnKeyType="next"
              onChangeText={setName}
              value={name}
            />
            <View
              style={{
                marginTop: 16,
              }}
            >
              <Input
                defaultValue=""
                icon="at"
                name="user"
                placeholder="Email"
                returnKeyType="next"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View
              style={{
                marginTop: 16,
              }}
            >
              <Input
                defaultValue=""
                icon="lock"
                name="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="next"
                onChangeText={setPassword}
                value={password}
              />
            </View>
            <View
              style={{
                marginTop: 16,
                marginBottom: 24,
              }}
            >
              <Input
                defaultValue=""
                icon="lock"
                name="lock"
                placeholder="Confirme sua senha"
                secureTextEntry
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
            </View>
          </ContainerInputs>

          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              marginBottom: 25,
            }}
          >
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#2196F3' : undefined}
            />
            <Terms>
              Eu concordo com os termos de uso do aplicativo PeruíbeTec
            </Terms>
          </View>

          <Button onPress={handleFinishSignUp} title="Continue o Cadastro" />
        </Content>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
