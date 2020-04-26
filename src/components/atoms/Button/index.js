import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { margin, layout } from 'styled-system';

import Text from '../Text';

const ButtonTabWrapper = styled.div`
  border-radius: ${themeGet('radii.2')};
  background: transparent;
  box-shadow: none;
  outline: none;
  border: solid 1px ${themeGet('colors.indigo.0')};
  cursor: pointer;
  padding: ${themeGet('space.2')} ${themeGet('space.4')};

  ${Text} {
    color: ${themeGet('colors.indigo.0')};
  }
`;

const ButtonWrapper = styled.button`
  ${layout}
  ${margin}
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 0;

  &:focus ${ButtonTabWrapper} {
    border: solid 2px ${themeGet('colors.indigo.0')};
  }
  &:hover ${ButtonTabWrapper} {
    background: ${themeGet('colors.indigo.0')};

    ${Text} {
      color: ${themeGet('colors.white.1')};
    }
  }
`;

const Button = ({ text, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      <ButtonTabWrapper tabIndex='-1'>
        <Text>{text}</Text>
      </ButtonTabWrapper>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
