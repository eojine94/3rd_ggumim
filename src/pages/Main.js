import React, { useEffect, useState } from 'react';
import TagWrapper from '../components/TagWrapper/TagWrapper';
import SwiperSlide from '../components/SwiperSlide/SwiperSlide';
import * as S from './Main.style';

import ScrollContainer from 'react-indiana-drag-scroll';

function Main() {
  const [imgProdData, setImgProdData] = useState({});
  const [shownTag, setShownTag] = useState({});

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(res => res.json())
      .then(data => setImgProdData(data));
  }, []);

  const handleThumbnailClick = e => {
    console.log(e);
    setShownTag({});
  };

  return (
    <S.MainContainer>
      {imgProdData.productList && (
        <S.ContentWrapper>
          <S.ImgWrapper>
            <S.ThumbImg
              src={imgProdData.imageUrl}
              alt="thumbnailImg"
              onClick={handleThumbnailClick}
            />
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
          <ScrollContainer style={{ display: 'flex' }} hideScrollbars="false">
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
          </ScrollContainer>
        </S.ContentWrapper>
      )}
    </S.MainContainer>
  );
}

export default Main;
