import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/FontAwesome5';

import {
  Container,
  Name,
  TimeToPost,
  ProfilePhoto,
  ContentContainer,
  Caption,
  PostPhoto,
  IconsContainer,
} from './styles';

interface HeaderProps {
  name: string;
  profile_image: string;
  hours: string;
  caption?: string;
  image?: string;
  comment: string;
  likes: string;
}

export function Post({
  name,
  profile_image,
  hours,
  caption,
  image,
  comment,
  likes,
}: HeaderProps): ReactElement {
  return (
    <>
      <Container>
        <View style={{ width: '20%' }}>
          <ProfilePhoto source={{ uri: `${profile_image}` }} />
        </View>
        <ContentContainer>
          <Name>{name} </Name>
          <TimeToPost>• {hours}h</TimeToPost>
          {caption && <Caption>{caption}</Caption>}
          {image && <PostPhoto source={{ uri: `${image}` }} />}
          <IconsContainer>
            <TouchableOpacity activeOpacity={0.6}>
              <Feather
                iconStyle={{ padding: 10 }}
                name="comment"
                color="#404B5A"
                size={15}
              >
                ⠀{comment}
              </Feather>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Feather name="heart" color="#404B5A" size={15}>
                ⠀{likes}
              </Feather>
            </TouchableOpacity>
          </IconsContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
