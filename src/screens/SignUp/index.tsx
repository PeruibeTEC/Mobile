import React, { useState } from 'react';
import { 
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  View
} from 'react-native';

import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { 
  Title,
  Content,
  ContainerInputs,
  Terms,
} from './styles';

export function SignUp() {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  
  async function handleFinishSignUp() {
    navigation.navigate('FinishSignUp');
  }

  return (
    <SafeAreaView
      style={{
        minHeight: Math.round(Dimensions.get('window').height - 200)
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
            />
            <View style={{
              marginTop: 16,
            }}>
              <Input 
                defaultValue=""
                icon="at" 
                name="user"
                placeholder="Email"
                returnKeyType="next"
              />
            </View>
            <View style={{
              marginTop: 16,
            }}>
              <Input
                defaultValue=""
                icon="lock"
                name="lock"
                placeholder="Senha"
                secureTextEntry={true}
                returnKeyType="next"
              />
            </View>
            <View style={{
              marginTop: 16,
              marginBottom: 24
            }}>
              <Input 
                defaultValue=""
                icon="lock" 
                name="lock"
                placeholder="Confirme sua senha"
                secureTextEntry={true}
              />
            </View>
          </ContainerInputs>

          <View style={{
            flexDirection:"row",
            width: '85%',
            marginBottom: 25
          }}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#2196F3' : undefined}
            />
            <Terms>
              Eu concordo com os termos de uso do aplicativo PeruíbeTec
            </Terms>
          </View>

          <Button 
            onPress={handleFinishSignUp}
            title="Continue o Cadastro" 
          />

        </Content>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
