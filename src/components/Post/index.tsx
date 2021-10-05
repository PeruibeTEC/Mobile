import React, { useState } from 'react';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import colors from '../../styles/colors';
import normalize from '../../utils/normalizeSize';
import { sizes } from '../../utils/predefinedSizes';

import {
  Container,
  Name,
  TimeToPost,
  ProfilePhoto,
  HeadContainer,
  Infos,
  Dot,
  MenuToggleContainer,
  CaptionContainer,
  Caption,
  PostPhoto,
  PostActionsContainer,
  PostActions,
  ActionText,
  Action,
  LikeText,
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

const Post: React.FC<HeaderProps> = ({
  name,
  profile_image,
  hours,
  caption,
  image,
  comment,
  likes,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Container>
      <HeadContainer>
        <Infos>
          <ProfilePhoto source={{ uri: `${profile_image}` }} />
          <Name>{name}</Name>
          <Dot />
          <TimeToPost>{hours}</TimeToPost>
        </Infos>

        <MenuToggleContainer activeOpacity={0.8}>
          <Icon
            name="dots-vertical"
            color={colors.light.gray500}
            size={normalize(24)}
          />
        </MenuToggleContainer>
      </HeadContainer>

      <CaptionContainer>
        <Caption>{caption}</Caption>
      </CaptionContainer>

      {image && <PostPhoto source={{ uri: `${image}` }} />}

      <PostActionsContainer>
        <PostActions>
          <Action
            activeOpacity={0.8}
            onPress={() => (isLiked ? setIsLiked(false) : setIsLiked(true))}
          >
            <Icon
              name={isLiked ? 'heart' : 'heart-outline'}
              color={isLiked ? colors.light.red300 : colors.light.gray500}
              size={normalize(24)}
            />
            <LikeText isLiked={isLiked}>{likes}</LikeText>
          </Action>

          <Action activeOpacity={0.8} style={{ marginLeft: sizes.width.dp24 }}>
            <Icon
              name="chat-outline"
              color={colors.light.gray500}
              size={normalize(24)}
            />
            <ActionText>{comment}</ActionText>
          </Action>
        </PostActions>
      </PostActionsContainer>
    </Container>
  );
};

export default Post;
