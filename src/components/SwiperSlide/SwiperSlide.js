import React, { useState } from 'react';
import styled from 'styled-components';

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

  // console.log('isSelected : ', isSelected);

  return (
    <SwiperSlideContainer
      isSelected={isSelected}
      // isSelected={shownTag === data}
      onClick={!isSelected ? handleOpenSlide : handleCloseSlide}
    >
      <SlideImg
        src={data.imageUrl}
        isSelected={isSelected}
        // isSelected={shownTag === data}
      />
      {data.discountRate > 0 && (
        <DiscountBadge>{data.discountRate}%</DiscountBadge>
      )}
    </SwiperSlideContainer>
  );
}

const SwiperSlideContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 28px 6px;
  border: ${props => props.isSelected && '2px transparent solid'};
  background: ${props =>
    props.isSelected &&
    'linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)'};
  border-radius: 18px;
`;

const SlideImg = styled.img`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: ${props =>
    !props.isSelected ? '0.5px solid #aaafb9' : '0.5px solid white'};
  cursor: pointer;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 1px;
  right: 6px;
  background-image: url('/images/20211117191419RW6JS6bjRm.png');
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

export default SwiperSlide;
