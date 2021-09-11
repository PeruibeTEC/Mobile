import React, { ReactElement, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import {
  Container,
  Name,
  TimeToPost,
  ProfilePhoto,
  ContentContainer,
  Caption,
  PostPhoto,
  IconsContainer,
  HeadContainer,
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
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <Container>
        <HeadContainer>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <ProfilePhoto source={{ uri: `${profile_image}` }} />
              <Name>{name} </Name>
              <TimeToPost>• {hours}h</TimeToPost>
            </View>

            <TouchableOpacity activeOpacity={0.6}>
              <Feather
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                name="more-vertical"
                color="#6D808F"
                size={24}
              />
            </TouchableOpacity>
          </View>
          {caption && <Caption>{caption}</Caption>}
        </HeadContainer>

        {image && <PostPhoto source={{ uri: `${image}` }} />}

        <ContentContainer>
          <IconsContainer>
            <TouchableOpacity
              onPress={() => (isLiked ? setIsLiked(false) : setIsLiked(true))}
              activeOpacity={0.6}
            >
              <Feather
                name="heart"
                color={isLiked ? 'red' : '#6D808F'}
                size={16}
              >
                ⠀{likes}
              </Feather>
            </TouchableOpacity>

            <TouchableOpacity style={{ left: 24 }} activeOpacity={0.6}>
              <Feather
                iconStyle={{ padding: 10 }}
                name="message-circle"
                color="#6D808F"
                size={16}
              >
                ⠀{comment}
              </Feather>
            </TouchableOpacity>
          </IconsContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
