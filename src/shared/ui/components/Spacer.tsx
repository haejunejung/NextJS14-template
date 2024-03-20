'use client';

import emotionStyled from '@emotion/styled';
import {Property} from 'csstype';
import {CSSProperties} from 'react';

interface SpacerProps {
  backgroundColor?: Property.BackgroundColor;
  paddingVertical?: Property.Padding;
  paddingHorizontal?: Property.Padding;
  marginVertical?: Property.Margin;
  marginHorizontal?: Property.Margin;
  width?: Property.Width;
  height?: Property.Height;
  style?: CSSProperties;
}

const Spacer = emotionStyled.div<SpacerProps>((props: SpacerProps) => {
  return {
    display: 'block',
    backgroundColor: props.backgroundColor,
    padding: `${props.paddingVertical} ${props.paddingHorizontal}`,
    margin: `${props.marginVertical} ${props.marginHorizontal}`,
    width: props.width,
    height: props.height,
    ...props.style,
  };
});

export default Spacer;
