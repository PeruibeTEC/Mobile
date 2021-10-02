import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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

interface IParams {
  typeProfile: string;
}

const ChooseAnOption: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as IParams;
  const { typeProfile } = routeParams;

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
              onPress={() => navigation.navigate('SignUp', { typeProfile })}
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

export default ChooseAnOption;
