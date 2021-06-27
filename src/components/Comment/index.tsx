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
interface CommentProps {
  name: string;
  profile_image: string;
  hours: string;
  comment: string;
  likes: string;
}


export function Comment({profile_image,name,comment,hours,likes}:CommentProps) {
  return (
      <Container>
        <View style={{ width: '10%' }}>
          <ProfilePhoto source={{ uri: `${profile_image}`  }} />
        </View>
        <ContentContainer>
           <Name>{name}</Name>
           <Caption>{comment}</Caption>
        </ContentContainer>
        <IconsContainer>
          <TimeToComment>{hours}</TimeToComment>
          <TouchableOpacity>
              <Feather name="heart" color={'#E82656'} size={11}>
                ⠀{likes}
              </Feather>
           </TouchableOpacity>
        </IconsContainer>
      </Container>
  );
}
