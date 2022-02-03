import styled from 'styled-components';

export const SwiperSlideContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 28px 6px;
  border: ${({ isSelected }) => isSelected && '2px transparent solid'};
  background: ${({ isSelected }) =>
    isSelected && 'linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)'};
  border-radius: 18px;
`;

export const SlideImg = styled.img`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: ${({ isSelected }) =>
    !isSelected ? '0.5px solid #aaafb9' : '0.5px solid white'};
  cursor: pointer;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: ${({ isSelected }) => (!isSelected ? '1px' : '2px')};
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
