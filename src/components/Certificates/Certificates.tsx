import React, { useCallback, useEffect, useState } from "react";
import { Container, Grid, Item, Overlay, Preview, CloseButton } from "./styles";

declare const require: any;

export function Certificates() {
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    try {
      const req = require.context("../../assets/certificates", false, /\.(png|jpe?g|svg|webp)$/);
      const imgs = req.keys().map((key: string) => req(key).default || req(key));
      setImages(imgs);
    } catch (e) {
      setImages([]);
    }
  }, []);

  const open = (i: number) => setSelected(i);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
      if (selected !== null) {
        if (e.key === "ArrowLeft") {
          setSelected((s) => (s && s > 0 ? s - 1 : s));
        }
        if (e.key === "ArrowRight") {
          setSelected((s) => (s !== null && s < images.length - 1 ? (s as number) + 1 : s));
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, selected, images.length]);

  return (
    <Container id="certificates">
      <h2>Certificates</h2>
      {images.length === 0 ? (
        <p>No certificates found. Place images in src/assets/certificates</p>
      ) : (
        <Grid>
          {images.map((src, i) => (
            <Item key={i} onClick={() => open(i)}>
              <img src={src} alt={`certificate-${i}`} />
            </Item>
          ))}
        </Grid>
      )}

      {selected !== null && (
        <Overlay onClick={close}>
          <Preview onClick={(e) => e.stopPropagation()}>
            <img src={images[selected]} alt={`certificate-${selected}`} onClick={close} />
            <CloseButton onClick={close} aria-label="close">×</CloseButton>
          </Preview>
        </Overlay>
      )}
    </Container>
  );
}
