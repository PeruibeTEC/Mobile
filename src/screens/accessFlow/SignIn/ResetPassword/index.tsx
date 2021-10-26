import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { sizes } from '../../../../utils/predefinedSizes';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../../../components/Button';

import {
  Container,
  Content,
  Description,
  Form,
  KeyboardAvoidingView,
  Title,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header />

        <Content>
          <Title>Redefinir senha</Title>

          <Description>
            Insira o email associado com a sua conta e nós iremos enviar um
            email contendo instruções para a redefinição.
          </Description>

          <Form>
            <Input
              label="E-mail"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              keyboardType="email-address"
              style={{ marginBottom: sizes.height.dp20 }}
            />

            <Button
              title="Continuar"
              style={{ marginTop: sizes.height.dp24 }}
              onPress={() => navigation.navigate('CheckYourEmail')}
            />
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
