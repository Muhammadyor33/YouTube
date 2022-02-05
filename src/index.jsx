import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './Context/Localization'
import { Provider as ProviderTheme } from './Context/Themes'
import { Provider as AuthProvider } from './Context/Authentication'
import { Provider as GamProvider } from './Context/GamburgerMenu'
import { Provider as ShowMoreProvider } from './Context/SiteBarShowMore'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render (
	<React.StrictMode>
		<BrowserRouter>
			<GamProvider>
				<ShowMoreProvider>
					<AuthProvider>
						<ProviderTheme>
							<Provider>
								<App />
							</Provider>
						</ProviderTheme>
					</AuthProvider>
				</ShowMoreProvider>
			</GamProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
	