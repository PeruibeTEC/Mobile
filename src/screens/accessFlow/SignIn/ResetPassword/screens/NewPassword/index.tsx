import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { sizes } from '../../../../../../utils/predefinedSizes';

import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import Button from '../../../../../../components/Button';

import {
  Container,
  Content,
  Form,
  KeyboardAvoidingView,
  Title,
} from './styles';

const NewPassword: React.FC = () => {
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState<string>();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header goBack={false} />

        <Content>
          <Title>Redefinir senha</Title>

          <Form>
            <Input
              label="Nova senha"
              value={newPassword}
              onChangeText={text => {
                setNewPassword(text);
              }}
              style={{ marginBottom: sizes.height.dp16 }}
            />

            <Button
              title="Redefinir"
              style={{ marginTop: sizes.height.dp24 }}
              onPress={() => navigation.navigate('initial')}
            />
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default NewPassword;
