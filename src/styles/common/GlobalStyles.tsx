import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset};
	* {
		box-sizing: border-box;
	}
  input, button {
    background: transparent;
    border: none;
    outline: none;
  }
  .app {
    display:flex;
  }
`;

export default GlobalStyles;
