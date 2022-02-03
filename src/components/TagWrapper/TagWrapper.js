import React, { useEffect, useState } from 'react';
import formatingPrice from '../../utils';
import * as S from './TagWrapper.style';

function TagWrapper({ data, shownTag, setShownTag }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleOpenTag = () => {
    setIsClicked(true);
    setShownTag(data);
  };

  const handleCloseTag = () => {
    setShownTag({});
    setIsClicked(false);
  };

  useEffect(() => {
    setIsClicked(data === shownTag);
  }, [data, shownTag]);

  const onRight = data.pointY * 1.6 > 400;
  const onBottom = data.pointX * 1.6 > 500;

  return (
    <S.TagWrapperContainer pointX={data.pointX} pointY={data.pointY}>
      {!isClicked ? (
        <S.ScopeTag
          src="/images/20211029145238AlZrQ41xtg.png"
          onClick={handleOpenTag}
        />
      ) : (
        <>
          <S.CloseTag
            src="/images/20211029145330GwwumnWNSs.png"
            onClick={handleCloseTag}
          />
          <S.ToolTipWrapper onRight={onRight} onBottom={onBottom}>
            <S.ToolTipImage src={data.imageUrl} />
            <S.ToolTipDesc>
              <S.ToolTipName>{data.productName}</S.ToolTipName>
              <S.ToolTipPrice>
                {data.outside ? (
                  <S.PriceText>예상가</S.PriceText>
                ) : (
                  <S.DiscountRate>{data.discountRate}%</S.DiscountRate>
                )}
                <S.PriceDiscount>
                  {formatingPrice(data.priceDiscount)}
                </S.PriceDiscount>
              </S.ToolTipPrice>
            </S.ToolTipDesc>
            <S.ToolTipIconWrapper>
              <S.ToolTipIcon src="/images/20211102181936xqHzyWAmb8.png" />
            </S.ToolTipIconWrapper>
          </S.ToolTipWrapper>
        </>
      )}
    </S.TagWrapperContainer>
  );
}

export default TagWrapper;
