import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
  h2 { text-align: center; margin-bottom: 1.5rem; }
  p { text-align: center; color: #666; }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: center;
`;

export const Item = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  img { width: 100%; height: auto; display: block; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
`;

export const Preview = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  img { max-width: 100%; max-height: 100%; display: block; border-radius: 6px; cursor: zoom-out; }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  background: #fff;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;
