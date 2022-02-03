import React, { useEffect, useState } from 'react';
import TagWrapper from '../components/TagWrapper/TagWrapper';
import SwiperSlide from '../components/SwiperSlide/SwiperSlide';
import * as S from './Main.style';

function Main() {
  const [imgProdData, setImgProdData] = useState({});
  const [shownTag, setShownTag] = useState({});

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => res.json())
      .then(data => setImgProdData(data));
  }, []);

  return (
    <S.MainContainer>
      {imgProdData.productList && (
        <S.ContentWrapper>
          <S.ImgWrapper>
            <S.ThumbImg src={imgProdData.imageUrl} alt="thumbnailImg" />
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
          </S.ImgWrapper>
          <S.ProdSwiperContainer>
            <S.SwiperWrapper>
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
            </S.SwiperWrapper>
          </S.ProdSwiperContainer>
        </S.ContentWrapper>
      )}
    </S.MainContainer>
  );
}

export default Main;
