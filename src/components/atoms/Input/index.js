import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { margin, layout } from 'styled-system';

import Text from '../Text';

const Label = styled.label`
  display: block;
  ${margin}
  ${layout}
`;

const InputElement = styled.input`
  border: solid 1px transparent;
  border-radius: ${themeGet('radii.2')};
  background: ${themeGet('colors.indigo.2')};
  box-shadow: none;
  color: ${themeGet('colors.black.1')};
  outline: none;
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:focus {
    border: solid 1px ${themeGet('colors.indigo.0')};
    background: transparent;
  }

  [disabled] {
    cursor: not-allowed;
    background: ${themeGet('colors.white.2')};
  }
`;

const Input = React.forwardRef(
  ({ label, inputProps: { onChange, ...inputProps }, ...rest }, ref) => {
    return (
      <Label {...rest}>
        {label ? (
          <Text mb={1} color='black.2'>
            {label}
          </Text>
        ) : null}
        <InputElement
          ref={ref}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
        />
      </Label>
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.objectOf({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  })
};

export default Input;
