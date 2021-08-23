import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import {
  Container,
  ProfilePhoto,
  ContentContainer,
  Name,
  Caption,
  IconsContainer,
  TimeToComment,
} from './styles';

interface CommentProps {
  name: string;
  profile_image: string;
  hours: string;
  comment: string;
  likes: string;
}

export function Comment({
  profile_image,
  name,
  comment,
  hours,
  likes,
}: CommentProps): ReactElement {
  return (
    <Container>
      <View style={{ width: '10%' }}>
        <ProfilePhoto source={{ uri: `${profile_image}` }} />
      </View>
      <ContentContainer>
        <Name>{name}</Name>
        <Caption>{comment}</Caption>
      </ContentContainer>
      <IconsContainer>
        <TimeToComment>{hours}</TimeToComment>
        <TouchableOpacity activeOpacity={0.6}>
          <Feather name="heart" color="#E82656" size={14}>
            ⠀{likes}
          </Feather>
        </TouchableOpacity>
      </IconsContainer>
    </Container>
  );
}
