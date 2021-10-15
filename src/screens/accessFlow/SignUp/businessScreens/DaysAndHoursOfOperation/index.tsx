import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';

import Header from '../../../components/Header';
import DayAndTimeCard from './components/DayAndTimeCard';
import Button from '../../../../../components/Button';
import SecondaryButton from '../../../../../components/SecondaryButton';
import { sizes } from '../../../../../utils/predefinedSizes';

import {
  Container,
  Content,
  Description,
  Label,
  Login,
  LoginLink,
} from './styles';

const DaysAndHoursOfOperation: React.FC = () => {
  const navigation = useNavigation();
  const [id, setId] = useState(1);
  const [dayAndTimeCard, setDayAndTimeCard] = useState([
    { id: 0, component: DayAndTimeCard },
  ]);

  return (
    <Container>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
      >
        <Content>
          <Description>Insira os dias e horários de funcionamento</Description>

          {dayAndTimeCard.map(value => {
            const Card = value.component;
            return <Card key={value.id} />;
          })}

          <SecondaryButton
            title="Adicionar mais horário"
            style={{ marginTop: sizes.height.dp16 }}
            onPress={() => {
              setId(id + 1);

              setDayAndTimeCard(rest => [
                ...rest,
                { id, component: DayAndTimeCard },
              ]);
            }}
          />

          <Button
            title="Continuar"
            style={{ marginTop: sizes.height.dp40 }}
            onPress={() => {
              navigation.navigate('FinishRegistration');
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

export default DaysAndHoursOfOperation;
