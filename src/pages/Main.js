import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TagWrapper from '../components/TagWrapper/TagWrapper';

function Main() {
  const [imgProdData, setImgProdData] = useState({});
  const [isShownTag, setIsShownTag] = useState(false);

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => res.json())
      .then(data => setImgProdData(data));
  }, []);

  // console.log(isShownTag);

  return (
    <MainContainer>
      {imgProdData.productList && (
        <ContentWrapper>
          <ImgWrapper>
            <ThumbImg src={imgProdData.imageUrl} alt="thumbNailImage" />
            {imgProdData.productList.map(el => {
              return (
                <TagWrapper
                  key={el.productId}
                  data={el}
                  isShownTag={isShownTag}
                  setIsShownTag={setIsShownTag}
                />
              );
            })}
          </ImgWrapper>
          <ProdSwiperContainer>
            <SwiperWrapper>
              {imgProdData.productList.map(el => {
                return (
                  <SwiperSlide key={el.productId}>
                    <SlideImg src={el.imageUrl} />
                    {el.discountRate > 0 && (
                      <DiscountBadge>{el.discountRate}%</DiscountBadge>
                    )}
                  </SwiperSlide>
                );
              })}
            </SwiperWrapper>
          </ProdSwiperContainer>
        </ContentWrapper>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const ContentWrapper = styled.div`
  width: 800px;
  box-sizing: border-box;
  padding: 40px 0;
  margin: 0 auto;
`;

const ImgWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const ThumbImg = styled.img`
  width: 100%;
  height: auto;
`;

const ProdSwiperContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding-right: 10px;
`;

const SwiperWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SwiperSlide = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
  margin: 28px 6px;
  /* 선택 되었을 때 */
  /* border: 2px transparent solid;
  background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%); */
  border-radius: 18px;
`;

const SlideImg = styled.img`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  /* 선택 안 되었을 때 (기본) */
  border: 0.5px solid #aaafb9;
  /* 선택 되었을 때 */
  /* border: 0.5px solid white; */
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

export default Main;
