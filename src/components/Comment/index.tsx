import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import {
  Container,
  ProfilePhoto,
  Name,
  Caption,
  IconsContainer,
  TimeToComment,
  Head,
  Infos,
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
      <Head>
        <ProfilePhoto source={{ uri: `${profile_image}` }} />
        <Infos>
          <Name>{name}</Name>
          <TimeToComment>Há {hours}</TimeToComment>
        </Infos>
      </Head>

      <Caption>{comment}</Caption>

      <IconsContainer>
        <TouchableOpacity activeOpacity={0.6}>
          <Feather name="heart" color="#E82656" size={14}>
            ⠀{likes}
          </Feather>
        </TouchableOpacity>
      </IconsContainer>
    </Container>
  );
}
