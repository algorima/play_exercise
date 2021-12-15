import PropTypes from 'prop-types';
import styled from 'styled-components';

import { paletteMapper, spacingMapper } from 'Theme';

const Typography = styled.span`
  ${({ theme, type }) => theme.typography[type]};
  font-family: ${({ fontFamily }) => fontFamily || 'NanumSquare'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color, theme }) => paletteMapper({ color, theme })};
  display: block;
  margin: ${(props) => spacingMapper('margin', props)};
  padding: ${(props) => spacingMapper('padding', props)};
`;
export default Typography;

Typography.propTypes = {
  type: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'subtitle1',
    'subtitle2',
    'subtitle3',
    'b1',
    'b2',
    'caption',
  ]).isRequired,
  fontFamily: PropTypes.oneOf(['Noto Sans KR', 'Poppins']),
  fontWeight: PropTypes.oneOf([300, 400, 500, 600, 700, 800]),
  color: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  margin: PropTypes.number,
  marginX: PropTypes.number,
  marginY: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
};
