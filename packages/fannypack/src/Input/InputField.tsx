import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';

import { Omit } from '../types';
import Group from '../Group';
import Input, { LocalInputProps, InputProps, inputDefaultProps, inputPropTypes } from './Input';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';
import { formikField, reduxFormField } from '../adaptors/fields';

export type LocalInputFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalInputProps & {
    /** Addon component to the input (before). Similar to the addon components in Input. */
    addonBefore?: React.ReactElement<any>;
    /** Addon component to the input (after). Similar to the addon components in Input. */
    addonAfter?: React.ReactElement<any>;
    inputProps?: LocalInputProps;
    /** If addonBefore or addonAfter exists, then the addons will render vertically. */
    isVertical?: boolean;
  };
export type InputFieldProps = LocalInputFieldProps & InputProps;
export type InputFieldComponents = {
  Formik: React.FunctionComponent<InputFieldProps>;
  ReduxForm: React.FunctionComponent<InputFieldProps>;
};

export const InputField: React.FunctionComponent<LocalInputFieldProps> & InputFieldComponents = ({
  addonBefore,
  addonAfter,
  a11yId,
  description,
  hint,
  isOptional,
  isVertical,
  label,
  validationText,
  after,
  a11yLabel,
  autoComplete,
  autoFocus,
  before,
  children,
  className,
  defaultValue,
  disabled,
  inputProps,
  inputRef,
  isLoading,
  isRequired,
  name,
  size,
  mask,
  max,
  maxLength,
  min,
  minLength,
  multiple,
  pattern,
  placeholder,
  readOnly,
  spellCheck,
  step,
  state,
  type,
  value,
  onBlur,
  onChange,
  onFocus,
  ...props
}) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
    {...props}
  >
    {({ elementProps }) => (
      <ConditionalWrap
        condition={addonBefore || addonAfter}
        wrap={(children: React.ReactNode) => <Group isVertical={isVertical}>{children}</Group>}
      >
        {addonBefore}
        <Input
          after={after}
          a11yId={a11yId}
          a11yLabel={a11yLabel}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          before={before}
          className={className}
          defaultValue={defaultValue}
          disabled={disabled}
          inputProps={inputProps}
          inputRef={inputRef}
          isLoading={isLoading}
          isRequired={isRequired}
          name={name}
          size={size}
          mask={mask}
          max={max}
          maxLength={maxLength}
          min={min}
          minLength={minLength}
          multiple={multiple}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          spellCheck={spellCheck}
          step={step}
          state={state}
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          {...elementProps}
        >
          {children}
        </Input>
        {addonAfter}
      </ConditionalWrap>
    )}
  </FieldWrapper>
);

InputField.Formik = formikField(InputField, { hasFieldWrapper: true });
InputField.ReduxForm = reduxFormField(InputField, { hasFieldWrapper: true });

export const inputFieldPropTypes = {
  addonBefore: PropTypes.element,
  addonAfter: PropTypes.element,
  inputProps: PropTypes.shape(inputPropTypes),
  isVertical: PropTypes.bool,
  ...fieldWrapperPropTypes,
  ...inputPropTypes
};
InputField.propTypes = inputFieldPropTypes;

export const inputFieldDefaultProps = {
  addonBefore: undefined,
  addonAfter: undefined,
  inputProps: {},
  isVertical: false,
  ...fieldWrapperDefaultProps,
  ...inputDefaultProps
};
InputField.defaultProps = inputFieldDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<InputFieldProps> & InputFieldComponents = InputField;
export default C;
