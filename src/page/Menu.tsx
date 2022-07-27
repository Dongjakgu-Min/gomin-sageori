import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { View, Title, Content } from '../component/View';
import Dropdown from '../component/Dropdown';
import { restaurantType } from '../types/type';
import { TypeAPI } from '../API';

function Menu() {
  const [type, setType] = useState<restaurantType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await TypeAPI.getAllType();
      setType(data);
    };

    fetch().catch((err) => console.log(err));
  });

  return (
    <View>
      <Title>메뉴 찾기</Title>
      <Content>먹고 싶은 메뉴를 찾아보세요.</Content>
      <Dropdown data={type}/>
    </View>
  );
}

export default Menu;
