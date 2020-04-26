import styled from 'styled-components';
import { typography, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const FontIcon = styled.i`
  ${typography}
  ${color}
`;

FontIcon.propTypes = {
  ...propTypes.color,
  ...propTypes.typography
};

FontIcon.displayName = 'FontIcon';

export default FontIcon;
