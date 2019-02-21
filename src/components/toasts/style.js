// @flow
import theme from 'shared/theme';
// $FlowFixMe
import styled, { keyframes } from 'styled-components';
import { zIndex, Gradient } from '../globals';

export const Container = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 256px;
  background: transparent;
  pointer-events: none;
  z-index: ${zIndex.toast};
`;

const toastFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  5% {
    opacity: 1;
    transform: translateY(0px);
  }
  95% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-4px);
  }
`;

// TODO: refine toast styling

const Toast = styled.div`
  border-radius: 4px;
  padding: 8px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  display: block;
  margin-bottom: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  opacity: 0;
  position: relative;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-name: ${toastFade};
  animation-timing-function: linear;
`;

export const ErrorToast = styled(Toast)`
  background-color: ${theme.warn.default};
`;

export const SuccessToast = styled(Toast)`
  background-color: ${theme.success.default};
`;

export const NeutralToast = styled(Toast)`
  background-color: ${theme.text.alt};
`;
