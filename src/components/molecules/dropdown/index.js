// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// // import { Text, Box, Portal } from '../../atoms';

// const Dropdown = ({
//   title,
//   icon,
//   direction,
//   onItemClick,
//   options,
//   mountNode,
//   children,
//   ...rest
// }) => {
//   const [isVisible, setVisible] = useState(false);
//   return (
//     <>
//       <children onClick={() => setVisible(!isVisible)} />
//     </>
//   );
// };

// Dropdown.defaultProps = {
//   direction: 'bottom',
//   onItemClick: () => {},
//   options: []
// };

// Dropdown.propTypes = {
//   direction: PropTypes.string,
//   onItemClick: PropTypes.func,
//   mountNode: PropTypes.node,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       icon: PropTypes.string,
//       label: PropTypes.string,
//       id: PropTypes.string
//     })
//   )
// };

// export default Dropdown;
