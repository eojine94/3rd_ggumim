import React, { useEffect, useState } from 'react';
import * as S from './SwiperSlide.style';

function SwiperSlide({ data, shownTag, setShownTag }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleOpenSlide = () => {
    setIsSelected(true);
    setShownTag(data);
  };

  const handleCloseSlide = () => {
    setIsSelected(false);
    setShownTag({});
  };

  useEffect(() => {
    setIsSelected(data === shownTag);
  }, [data, shownTag]);

  return (
    <S.SwiperSlideContainer
      isSelected={isSelected}
      onClick={!isSelected ? handleOpenSlide : handleCloseSlide}
    >
      <S.SlideImg src={data.imageUrl} isSelected={isSelected} />
      {data.discountRate > 0 && (
        <S.DiscountBadge isSelected={isSelected}>
          {data.discountRate}%
        </S.DiscountBadge>
      )}
    </S.SwiperSlideContainer>
  );
}

export default SwiperSlide;
