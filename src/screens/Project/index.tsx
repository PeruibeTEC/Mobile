import React from 'react';
import { ScrollView } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';
import { Content } from '../../components/Content';
import { Comment } from '../../components/Comment';

import { Border, TitleToComments } from './styles';

export function Project() {

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title="Obras da Cidade" />
      <TitleImage
        title="Hospital de Peruíbe"
        image="https://lh3.googleusercontent.com/proxy/vXe0ZeGYZRGfkelOQvJJzvBBWImpiiyPAmbnO9dgFxvMe-vYBaePfS__6CikWRGFkVu41LrXbemhREMoQ-TbjGMxVHI_vgF4t7UbaouclZA8Br569Mch5tqDKjJas2u_Tlmb5TF2FdKe"
      />
      <Content
        title="Hospital de Peruibe"
        street="R. Ten. José Ignácio Monte Olivia"
        number="10"
        budget="R$ 22.000.000.000,00"
        starting="2015"
        ending="2018"
        description="Uma importante obra para a cidade é a construção de um Hospital.
        Ele começou a ser construído em 15/02/2015 e o prazo máximo estipulado é no final de 2018.
        Ele promete trazer tecnologia e inovação para os munícipes e estará localizado na rua Tenente
        José Ignácio Monte Oliva no bairro Jardim Peruíbe, no mesmo quarteirão do Ambulatório Medico de
        Especialidades (AME) e da Unidade de Pronto Atendimento (UPA), ao todo serão 54 leitos para atender
        a população."
      />
      <Border/>

      <TitleToComments>Comentários</TitleToComments>

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
    </ScrollView>
  );
}

