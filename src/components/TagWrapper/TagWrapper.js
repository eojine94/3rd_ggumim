import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import formatingPrice from '../../utils';

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

  // console.log('isClicked : ', isClicked);

  return (
    <TagWrapperContainer pointX={data.pointX} pointY={data.pointY}>
      {!isClicked ? (
        <ScopeTag
          src="/images/20211029145238AlZrQ41xtg.png"
          onClick={handleOpenTag}
        />
      ) : (
        <>
          <CloseTag
            src="/images/20211029145330GwwumnWNSs.png"
            onClick={handleCloseTag}
          />
          <ToolTipWrapper>
            <ToolTipImage src={data.imageUrl} />
            <ToolTipDesc>
              <ToolTipName>{data.productName}</ToolTipName>
              <ToolTipPrice>
                {data.outside ? (
                  <PriceText>예상가</PriceText>
                ) : (
                  <DiscountRate>{data.discountRate}%</DiscountRate>
                )}
                <PriceDiscount>
                  {formatingPrice(data.priceDiscount)}
                </PriceDiscount>
              </ToolTipPrice>
            </ToolTipDesc>
            <ToolTipIconWrapper>
              <ToolTipIcon src="/images/20211102181936xqHzyWAmb8.png" />
            </ToolTipIconWrapper>
          </ToolTipWrapper>
        </>
      )}
    </TagWrapperContainer>
  );
}

const TagWrapperContainer = styled.div`
  position: absolute;
  top: calc(${props => props.pointX}px * 1.6);
  left: calc(${props => props.pointY}px * 1.6);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ScopeTag = styled.img`
  width: 32px;
  height: 32px;
`;

const CloseTag = styled.img`
  width: 32px;
  height: 32px;
`;

const ToolTipWrapper = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -24px;
  width: 220px;
  height: 86px;
  margin-top: 16px;
  padding: 8px 0 8px 8px;
  border-radius: 7px;
  font-size: 14px;
  color: #4a4a4a;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  ::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url('/images/20211118152728RO3OXnhkrC.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

const ToolTipImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 8px;
  border-radius: 4px;
`;

const ToolTipDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 112px;
  height: 100%;
  padding-bottom: 2px;
  text-align: left;
`;

const ToolTipName = styled.div`
  display: -webkit-box;
  color: #333c45;
  line-height: 1.3em;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const ToolTipPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 -5px;
`;

const PriceText = styled.div`
  line-height: 1.2em;
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const DiscountRate = styled.div`
  color: #ff585d;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2em;
`;

const PriceDiscount = styled.div`
  line-height: 1.2em;
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  font-weight: bold;
  margin-left: 4px;
`;

const ToolTipIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const ToolTipIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default TagWrapper;
