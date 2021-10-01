import React, { useState } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';

import colors from '../../../../../../../styles/colors';

import {
  Container,
  InputTimeText,
  InputTimeContainer,
  Label,
  TimeContainer,
  Time,
  ContainerPicker,
  PickerStyle,
  Divider,
  InputDayContainer,
  InputDayText,
  Delete,
} from './styles';
import { sizes } from '../../../../../../../utils/predefinedSizes';

const optionsFake = [
  {
    id: 1,
    name: 'Todos os dias',
  },
  {
    id: 2,
    name: 'Personalizado',
  },
];

const DayAndTimeCard: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState<ItemValue>();

  return (
    <Container>
      <Delete activeOpacity={0.5}>
        <Icon name="delete-outline" size={24} color="#FAC8D6" />
      </Delete>

      <Time>
        <TimeContainer style={{ marginRight: sizes.width.dp8 }}>
          <Label>Abertura:</Label>

          <InputTimeContainer activeOpacity={0.8}>
            <InputTimeText>08:00</InputTimeText>
            <Icon
              name="clock-time-four-outline"
              size={24}
              color={colors.light.gray400}
            />
          </InputTimeContainer>
        </TimeContainer>

        <TimeContainer style={{ marginLeft: sizes.width.dp8 }}>
          <Label>Fechamento:</Label>

          <InputTimeContainer activeOpacity={0.8}>
            <InputTimeText>19:30</InputTimeText>
            <Icon
              name="clock-time-four-outline"
              size={24}
              color={colors.light.gray400}
            />
          </InputTimeContainer>
        </TimeContainer>
      </Time>

      <Divider />

      <ContainerPicker style={{ marginBottom: sizes.height.dp20 }}>
        <PickerStyle>
          <Picker
            selectedValue={optionSelected}
            onValueChange={itemValue => {
              setOptionSelected(itemValue);
            }}
          >
            {optionsFake &&
              optionsFake.map(option => (
                <Picker.Item
                  label={option.name}
                  value={option.id}
                  key={option.id}
                  color={colors.light.gray500}
                />
              ))}
          </Picker>
        </PickerStyle>
      </ContainerPicker>

      {optionSelected === 2 && (
        <InputDayContainer activeOpacity={0.8}>
          <InputDayText>Dom, Seg, Qua, Sex</InputDayText>
          <Icon name="calendar-range" size={28} color={colors.light.gray400} />
        </InputDayContainer>
      )}
    </Container>
  );
};

export default DayAndTimeCard;
