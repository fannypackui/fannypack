import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
import { Omit } from '../types';

import _Pane from './styled';

export interface LocalPaneProps {
  border?: boolean | 'shadow';
  className?: string;
  children?: React.ReactNode;
  isFullWidth?: boolean;
}

export const Pane: React.SFC<LocalPaneProps> = ({ border, children, ...props }) => (
  <_Pane styledBorder={border} {...props}>
    {children}
  </_Pane>
);

Pane.propTypes = {
  border: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['shadow'])]),
  className: PropTypes.string,
  children: PropTypes.node,
  isFullWidth: PropTypes.bool
};
Pane.defaultProps = {
  border: false,
  className: undefined,
  children: undefined,
  isFullWidth: false
};

export type PaneProps = LocalPaneProps & Omit<ReakitBoxProps, 'border'>;
//@ts-ignore
const C: React.SFC<PaneProps> = Pane;
export default C;