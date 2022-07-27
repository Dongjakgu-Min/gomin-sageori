import React from 'react';
import { View, Title, Content, Button, Container } from '../component/View';
import FoodImg from '../static/image/undraw_eating_together_re_ux62.svg';

function Main() {
  return (
    <View>
      <>
        <Title>고민사거리</Title>
        <Content>
          숭실대생을 위한, 혹은 숭실대 근처에 사는 사람들을 위한 밥집 추천
          서비스.
        </Content>
      </>
      <Container>
        <img src={FoodImg} width={300} height={300} />
      </Container>
      <Button>다음</Button>
    </View>
  );
}

export default Main;
