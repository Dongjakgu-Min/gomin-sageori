import React, { useEffect, useState } from 'react';
import { FoodAPI } from '../API';
import { Title, View, Button } from '../component/View';
import { Restaurant } from '../types/type';

function Result() {
  const [food, setFood] = useState<Restaurant>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await FoodAPI.getRandomFoodByType(1);
      setFood(data);
      setLoading(true);
    };

    fetch().catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Title>오늘의 점심은 {food?.title} 입니다!</Title>
      <Button>다시 뽑기</Button>
    </View>
  );
}

export default Result;
