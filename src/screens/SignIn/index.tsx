import React from 'react';
import { 
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  View 
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
  CreateAccountContainer 
} from './styles';

export function SignIn() {
  const navigation = useNavigation();
  
  async function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <SafeAreaView
      style={{
        minHeight: Math.round(Dimensions.get('window').height - 200)
      }}
    >
      <KeyboardAvoidingView>
        <Content>
          <Title>Login</Title>
          <ContainerInputs>
            <Input 
              defaultValue=""
              icon="user" 
              name="user"
              placeholder="Email"
            />
            <View style={{
              marginTop: 16,
              marginBottom: 52
            }}>
              <Input
                defaultValue=""
                icon="lock"
                name="lock"
                placeholder="Senha"
                secureTextEntry={true}
              />
            </View>
          </ContainerInputs>


          <Button onPress={() => {}} title="Entrar" />

          <TouchableOpacity activeOpacity={0.5}>
            <ForgotPassword>
              Esqueci minha senha
            </ForgotPassword>
          </TouchableOpacity>
        </Content>

      <CreateAccountContainer>
        <TouchableOpacity onPress={handleSignUp} activeOpacity={0.5}>
          <CreateAccount>
            Criar sua Conta
          </CreateAccount>
        </TouchableOpacity>
      </CreateAccountContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
