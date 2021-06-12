import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset};
	* {
		box-sizing: border-box;
	}
	#root {
		display:flex;
		justify-content: center;
		align-items: center;
		width:100vw;
		height:100vh;
	}
`;

export default GlobalStyles;
