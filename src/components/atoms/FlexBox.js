import styled from 'styled-components';
import { space, color, layout, position, flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const FlexBox = styled.div`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  display: flex;
`;

FlexBox.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color
};

export default FlexBox;
