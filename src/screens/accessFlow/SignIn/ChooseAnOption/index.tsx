import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import pixelToDP from '../../../../utils/pixelToDP';

import Header from '../../components/Header';
import Button from '../../../../components/Button';
import SecondaryButton from '../../../../components/SecondaryButton';
import {
  ButtonGroup,
  Container,
  CreateNewAccount,
  Label,
  NewAccount,
  KeyboardAvoidingView,
  Content,
  Title,
} from './styles';
import { sizes } from '../../../../utils/predefinedSizes';

const ChooseAnOption: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header />

        <Content>
          <Title>Login</Title>
          <ButtonGroup>
            <Button
              title="Continuar com Google"
              style={{ marginBottom: sizes.height.dp24 }}
              leftIcon
            >
              <Icon
                name="google"
                size={pixelToDP.width(24)}
                color="#F0FAFA"
                style={{ marginRight: sizes.width.dp12 }}
              />
            </Button>
            <SecondaryButton
              title="Continuar com E-mail"
              onPress={() => navigation.navigate('SignIn')}
              leftIcon
            >
              <Icon
                name="email-outline"
                size={pixelToDP.width(24)}
                color="#96A3A3"
                style={{ marginRight: sizes.width.dp12 }}
              />
            </SecondaryButton>
          </ButtonGroup>
        </Content>

        <CreateNewAccount>
          <Label>Ainda não tem cadastro?</Label>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseYourProfile')}
          >
            <NewAccount>Crie uma conta</NewAccount>
          </TouchableOpacity>
        </CreateNewAccount>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ChooseAnOption;
