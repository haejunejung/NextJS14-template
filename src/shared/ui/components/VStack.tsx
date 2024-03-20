'use client';

import emotionStyled from '@emotion/styled';
import {Property} from 'csstype';

interface VStackProps {
  flex?: Property.Flex;
  backgroundColor?: Property.BackgroundColor;
  paddingVertical?: Property.Padding;
  paddingHorizontal?: Property.Padding;
  gap?: Property.Gap;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  width?: Property.Width;
  hegiht?: Property.Height;
  position?: Property.Position;
  top?: Property.Top;
  bottom?: Property.Bottom;
}

const VStack = emotionStyled.div<VStackProps>((props: VStackProps) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: props.flex,
    backgroundColor: props.backgroundColor,
    padding: `${props.paddingVertical} ${props.paddingHorizontal}`,
    gap: props.gap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    width: props.width,
    height: props.hegiht,
    position: props.position,
    top: props.top,
    bottom: props.bottom,
  };
});

export default VStack;