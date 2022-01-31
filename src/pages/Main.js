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

  console.log(isShownTag);

  return (
    <MainContainer>
      <ContentWrapper>
        {imgProdData.productList && (
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
        )}
        <ProdWrapper>THIS IS PRODUCT WRAPPER</ProdWrapper>
      </ContentWrapper>
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
const ProdWrapper = styled.div``;

export default Main;
