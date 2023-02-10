import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
import createCache from '@emotion/cache';

export default function createEmotionCache() {
	return createCache({ key: 'css', prepend: true });
}

