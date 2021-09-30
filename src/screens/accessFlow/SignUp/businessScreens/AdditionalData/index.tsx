import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../../../components/Button';
import { sizes } from '../../../../../utils/predefinedSizes';
import colors from '../../../../../styles/colors';

import {
  Caption,
  Container,
  ContainerPicker,
  Content,
  Description,
  Label,
  Login,
  LoginLink,
  PickerStyle,
} from './styles';

const businessTypeFake = [
  {
    id: 1,
    name: 'Restaurante',
  },
  {
    id: 2,
    name: 'Igreja',
  },
  {
    id: 3,
    name: 'Loja de roupa',
  },
  {
    id: 4,
    name: 'Sorveteria',
  },
];

const AdditionalDataBusiness: React.FC = () => {
  const navigation = useNavigation();
  const [businessTypeSelected, setBusinessTypeSelected] = useState<ItemValue>();

  return (
    <Container>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
      >
        <Content>
          <Description>
            Vamos configurar seu perfil como estabelecimento
          </Description>

          <ContainerPicker style={{ marginBottom: sizes.height.dp20 }}>
            <Caption>Tipo de estabelecimento:</Caption>
            <PickerStyle>
              <Picker
                selectedValue={businessTypeSelected}
                onValueChange={itemValue => {
                  setBusinessTypeSelected(itemValue);
                }}
              >
                {businessTypeFake &&
                  businessTypeFake.map(businessType => (
                    <Picker.Item
                      label={businessType.name}
                      value={businessType.id}
                      key={businessType.id}
                      color={colors.light.gray500}
                    />
                  ))}
              </Picker>
            </PickerStyle>
          </ContainerPicker>

          <Input label="Bairro" style={{ marginBottom: sizes.height.dp20 }} />

          <Input label="Rua" style={{ marginBottom: sizes.height.dp20 }} />

          <Input
            label="Número"
            keyboardType="numeric"
            style={{ marginBottom: sizes.height.dp20 }}
          />

          <Input label="Informação adicional" />

          <Button
            title="Continuar"
            style={{ marginTop: sizes.height.dp40 }}
            onPress={() => {
              navigation.navigate('');
            }}
          />
        </Content>

        <Login>
          <Label>Já tem um cadastro?</Label>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseAnOptionSignIn')}
          >
            <LoginLink>Faça login</LoginLink>
          </TouchableOpacity>
        </Login>
      </ScrollView>
    </Container>
  );
};

export default AdditionalDataBusiness;
