import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';

// @ts-ignore
import { useUniqueId } from '../uniqueId';
import CardCard, { LocalCardCardProps, CardCardProps, cardCardPropTypes, cardCardDefaultProps } from './CardCard';
import CardContent, { CardContentProps } from './CardContent';
import CardHeader, { CardHeaderProps } from './CardHeader';
import CardFooter, { CardFooterProps } from './CardFooter';
import CardTitle, { CardTitleProps } from './CardTitle';

export type LocalCardProps = LocalCardCardProps & {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  footer?: string | React.ReactElement<any>;
  headerActions?: React.ReactElement<any>;
  isFullWidth?: boolean;
  title?: string | React.ReactElement<any>;
};
export type CardProps = CardCardProps & LocalCardProps;
export type CardComponents = {
  Card: React.FunctionComponent<CardCardProps>;
  Header: React.FunctionComponent<CardHeaderProps>;
  Content: React.FunctionComponent<CardContentProps>;
  Footer: React.FunctionComponent<CardFooterProps>;
  Title: React.FunctionComponent<CardTitleProps>;
};

export const Card: React.FunctionComponent<LocalCardProps> & CardComponents = ({
  a11yDescriptionId: _a11yDescriptionId,
  a11yTitleId: _a11yTitleId,
  children,
  footer,
  headerActions,
  title,
  ...props
}) => {
  const titleId = useUniqueId('Card');
  const descriptionId = useUniqueId('Card');
  const a11yDescriptionId = _a11yDescriptionId || descriptionId;
  const a11yTitleId = _a11yTitleId || titleId;
  return (
    <CardCard
      a11yDescriptionId={title || footer ? a11yDescriptionId : undefined}
      a11yTitleId={title ? a11yTitleId : undefined}
      {...props}
    >
      {title && (
        <CardHeader>
          {typeof title === 'string' ? <CardTitle id={a11yTitleId}>{title}</CardTitle> : title}
          {headerActions && <div>{headerActions}</div>}
        </CardHeader>
      )}
      <ConditionalWrap
        condition={title || footer}
        wrap={(children: React.ReactNode) => <CardContent id={a11yDescriptionId}>{children}</CardContent>}
      >
        {children}
      </ConditionalWrap>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardCard>
  );
};

Card.Card = CardCard;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;

export const cardPropTypes = {
  ...cardCardPropTypes,
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  headerActions: PropTypes.element,
  isFullWidth: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
Card.propTypes = cardPropTypes;

export const cardDefaultProps = {
  ...cardCardDefaultProps,
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  className: undefined,
  footer: undefined,
  headerActions: undefined,
  isFullWidth: false,
  title: undefined
};
Card.defaultProps = cardDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<CardProps> & CardComponents = Card;
export default C;
