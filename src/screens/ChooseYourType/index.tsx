import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import { 
  Title,
  Content,
  Description,
  Ilustration
} from './styles';
import ImageChoice from './assets/choice.png';

export function ChooseYourType() {
  const navigation = useNavigation();
  
  const [isTourist, setIsTourist] = useState(false);

  async function handleSignUpCitizen() {
    setIsTourist(false);
    await AsyncStorage.setItem('@PeruibeTec:isTourist', isTourist.toString());
    navigation.navigate('SignUp');
  }
  async function handleSignUpTourist() {
    setIsTourist(true);
    await AsyncStorage.setItem('@PeruibeTec:isTourist', isTourist.toString());
    navigation.navigate('ChooseYourCity');
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Content>
          <Ilustration 
            source={ImageChoice} 
            resizeMode="center" 
          />
          <Title>Você mora em Peruíbe ?</Title>

          <Description>
            Precisamos desse dado, pois o PeruibeTec filtra os conteúdos
            com base no perfil do usuário, assim mostrando apenas o relevante para
            você!!
          </Description>

          <Button 
            onPress={handleSignUpCitizen}
            title="Sim, sou um morador" 
          />
          <View style={{height: 18}} />
          <Button
            onPress={handleSignUpTourist}
            title="Não, sou um turista da cidade" 
          />

        </Content>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
