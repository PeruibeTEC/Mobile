import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';
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

const SignIn: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as IParams;
  const { typeProfile } = routeParams;

  const handleNavigation = () => {
    if (typeProfile === 'tourist') {
      navigation.navigate('AdditionalDataTourist');
    } else if (typeProfile === 'business') {
      navigation.navigate('AdditionalDataBusiness');
    } else {
      navigation.navigate('FinishRegistration');
    }
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
              label="Nome"
              keyboardType="default"
              style={{ marginBottom: sizes.height.dp20 }}
            />

            <Input
              label="E-mail"
              keyboardType="email-address"
              style={{ marginBottom: sizes.height.dp20 }}
            />

            <Input returnKeyType="done" label="Senha" secureTextEntry />

            <Button
              title="Continuar"
              style={{ marginTop: sizes.height.dp40 }}
              onPress={handleNavigation}
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

export default SignIn;
