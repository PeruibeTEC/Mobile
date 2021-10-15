import React, { ReactElement } from 'react';
import Feather from '@expo/vector-icons/Feather';

import SecondaryHeader from '../../components/SecondaryHeader';
import { Comment } from '../../components/Comment';

import normalize from '../../utils/normalizeSize';

import {
  Container,
  Content,
  TitleToComments,
  InputContainer,
  InputText,
  Input,
  WorkName,
  Photo,
  Infos,
  SimpleInformation,
  Description,
  Box,
  Send,
} from './styles';

export function Project(): ReactElement {
  return (
    <Container>
      <SecondaryHeader title="Obras" />

      <Content>
        <Photo
          source={{
            uri: 'https://s2.glbimg.com/cMu6k4hSgIodMjh4TMl1UYbA-uw=/0x0:1280x801/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Y/L/KjLss8R3mFkeAEeVS2fg/4-foto1.2-obras-de-fundacao-do-hospital-municipal-iniciaram-em-outubro-de-2015.jpg',
          }}
        />

        <Infos>
          <WorkName>Hospital de Peruíbe</WorkName>
          <SimpleInformation>
            R. Ten. José Ignácio Monte Olivia, 10
          </SimpleInformation>
          <SimpleInformation>Verba: R$22.000.000.000,00</SimpleInformation>
          <SimpleInformation>Início: 2015</SimpleInformation>
          <SimpleInformation>Prazo: 2018</SimpleInformation>

          <Description>
            Uma importante obra para a cidade é a construção de um Hospital. Ele
            começou a ser construído em 15/02/2015 e o prazo máximo estipulado é
            no final de 2018. Ele promete trazer tecnologia e inovação para os
            munícipes e estará localizado na rua Tenente José Ignácio Monte
            Oliva no bairro Jardim Peruíbe, no mesmo quarteirão do Ambulatório
            Medico de Especialidades (AME) e da Unidade de Pronto Atendimento
            (UPA), ao todo serão 54 leitos para atender a população.
          </Description>
        </Infos>

        <TitleToComments>Comentários</TitleToComments>

        <InputContainer>
          <InputText>Dê um feedback sobre a obra:</InputText>
          <Box>
            <Input multiline numberOfLines={8} placeholder="Digite aqui" />
            <Send activeOpacity={0.6}>
              <Feather
                name="arrow-right-circle"
                color="#2196f3"
                size={normalize(32)}
              />
            </Send>
          </Box>
        </InputContainer>

        <Comment
          name="Henrique Martins"
          profile_image="https://avatars.githubusercontent.com/u/51277667?v=4"
          hours="10min"
          comment="Um desrespeito com a população de Peruíbe, como pode
        uma cidade demorar 6 nos para realizar um hospital !!"
          likes="312"
        />
        <Comment
          name="Leticia Silverio"
          profile_image="https://i.pinimg.com/736x/e7/a0/18/e7a01869a1581393e8178c7d8ef0407c.jpg"
          hours="20min"
          comment="Moro perto da obra, nunca vejo ninguém trabalhando
        nela e nenhum progresso foi feito desde o começo do ano."
          likes="312"
        />
      </Content>
    </Container>
  );
}
