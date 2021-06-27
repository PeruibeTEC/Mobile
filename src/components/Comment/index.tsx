import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/FontAwesome5';

import {
  Container,
  ProfilePhoto,
  ContentContainer,
  Name,
  Caption,
  IconsContainer,
  TimeToComment
} from './styles';

export function Comment() {
  return (
      <Container>
        <View style={{ width: '20%' }}>
          <ProfilePhoto source={{ uri: "https://i.pinimg.com/736x/e7/a0/18/e7a01869a1581393e8178c7d8ef0407c.jpg" }} />
        </View>
        <ContentContainer>
           <Name>Leticia Silverio</Name>
           <Caption>Um desrespeito com a população de Peruibe, como pode uma cidade demorar 6 anos para realizar um hospital !!</Caption>
        </ContentContainer>
        <IconsContainer>
          <TimeToComment>10min</TimeToComment>
          <TouchableOpacity>
              <Feather name="heart" color={'#E82656'} size={13}>
                ⠀{312}
              </Feather>
           </TouchableOpacity>
        </IconsContainer>
      </Container>
  );
}
