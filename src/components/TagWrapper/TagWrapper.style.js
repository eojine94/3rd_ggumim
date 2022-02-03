import styled, { css } from 'styled-components';

export const TagWrapperContainer = styled.div`
  position: absolute;
  top: calc(${({ pointX }) => pointX}px * 1.6);
  left: calc(${({ pointY }) => pointY}px * 1.6);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const ScopeTag = styled.img`
  width: 32px;
  height: 32px;
`;

export const CloseTag = styled.img`
  width: 32px;
  height: 32px;
`;

export const ToolTipWrapper = styled.div`
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
  z-index: 1000;

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

  ${({ onRight }) =>
    onRight &&
    css`
      left: -160px;
      &::before {
        right: 38px;
        left: unset;
      }
    `}

  ${({ onBottom }) =>
    onBottom &&
    css`
      top: unset;
      bottom: 52px;
      &::before {
        transform: rotate(180deg);
        top: unset;
        bottom: -6px;
      }
    `}
`;

export const ToolTipImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 8px;
  border-radius: 4px;
`;

export const ToolTipDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 112px;
  height: 100%;
  padding-bottom: 2px;
  text-align: left;
`;

export const ToolTipName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #333c45;
  line-height: 1.3em;
  overflow: hidden;
`;

export const ToolTipPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 -5px;
`;

export const PriceText = styled.div`
  margin-bottom: 3px;
  font-size: 11px;
  font-weight: bold;
  line-height: 1.2em;
  color: #898f94;
`;

export const DiscountRate = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2em;
  color: #ff585d;
`;

export const PriceDiscount = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2em;
  color: #181d1f;
`;

export const ToolTipIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

export const ToolTipIcon = styled.img`
  width: 20px;
  height: 20px;
`;
