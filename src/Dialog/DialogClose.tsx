import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import { ButtonProps } from '../Button/Button';
// @ts-ignore
import Icon from '../Icon';
import { Omit } from '../types';
// @ts-ignore
import VisuallyHidden from '../VisuallyHidden';
import { DialogClose as _DialogClose } from './styled';

export interface LocalDialogCloseProps {
  className?: string;
}

export const DialogClose: React.SFC<LocalDialogCloseProps> = ({ children, ...props }) => (
  <_DialogClose kind="link" {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon aria-hidden="true" icon="cross" />
  </_DialogClose>
);

DialogClose.propTypes = {
  className: PropTypes.string
};
DialogClose.defaultProps = {
  className: undefined
};

export type DialogCloseProps = LocalDialogCloseProps & Omit<ButtonProps, 'children'>;
//@ts-ignore
const C: React.SFC<DialogCloseProps> = DialogClose;
export default C;