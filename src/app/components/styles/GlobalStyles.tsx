import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		height: 100vh;
		margin: 0 auto;
		display: grid;
		place-items: center;
		max-width: 700px;
	}
`;

export default GlobalStyle;
