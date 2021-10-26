import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, View } from 'react-native';

import { sizes } from '../../../../../../utils/predefinedSizes';

import Button from '../../../../../../components/Button';

import {
  Container,
  Content,
  Footer,
  Description,
  Form,
  Icon,
  IconContainer,
  KeyboardAvoidingView,
  Label,
  Title,
} from './styles';

const CheckYourEmail: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View />

        <Content>
          <IconContainer>
            <Icon name="email-newsletter" />
          </IconContainer>

          <Form>
            <Title>Verifique seu Email</Title>

            <Description>
              Nós enviamos no seu email as instruções para redefinir sua senha.
            </Description>

            <Button
              title="Voltar ao início"
              style={{ marginTop: sizes.height.dp40 }}
              onPress={() => {
                navigation.navigate('NewPassword');
                // navigation.navigate('initial')
              }}
            />
          </Form>
        </Content>

        <Footer>
          <Label>Não recebeu o email? {`\n`} Cheque em seus Spans</Label>
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default CheckYourEmail;
