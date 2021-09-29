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
  Login,
  Label,
  LoginLink,
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
          <Title>Cadastrar-se</Title>
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
              onPress={() => navigation.navigate('SignUp')}
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

        <Login>
          <Label>Já tem um cadastro?</Label>
          <TouchableOpacity>
            <LoginLink>Faça login</LoginLink>
          </TouchableOpacity>
        </Login>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ChooseAnOption;
