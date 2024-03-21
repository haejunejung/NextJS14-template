'use client';

import emotionStyled from '@emotion/styled';
import {Property} from 'csstype';

interface HeaderProps {
  flex?: Property.Flex;
  flexDirection?: Property.FlexDirection;
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

const Header = emotionStyled.head<HeaderProps>((props: HeaderProps) => {
  return {
    display: 'flex',
    flex: props.flex,
    flexDirection: props.flexDirection,
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

export default Header;
