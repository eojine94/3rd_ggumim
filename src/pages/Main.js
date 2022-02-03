import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TagWrapper from '../components/TagWrapper/TagWrapper';
import SwiperSlide from '../components/SwiperSlide/SwiperSlide';

function Main() {
  const [imgProdData, setImgProdData] = useState({});
  const [shownTag, setShownTag] = useState({});

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => res.json())
      .then(data => setImgProdData(data));
  }, []);

  // console.log('shownTag : ', shownTag);

  return (
    <MainContainer>
      {imgProdData.productList && (
        <ContentWrapper>
          <ImgWrapper>
            <ThumbImg src={imgProdData.imageUrl} alt="thumbnailImg" />
            {imgProdData.productList.map(el => {
              return (
                <TagWrapper
                  key={el.productId}
                  data={el}
                  shownTag={shownTag}
                  setShownTag={setShownTag}
                />
              );
            })}
          </ImgWrapper>
          <ProdSwiperContainer>
            <SwiperWrapper>
              {imgProdData.productList.map(el => {
                return (
                  <SwiperSlide
                    key={el.productId}
                    data={el}
                    shownTag={shownTag}
                    setShownTag={setShownTag}
                  />
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

export default Main;
