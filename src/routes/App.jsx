import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Pos from '../containers/Pos';
import NotFound from '../pages/NotFound';
import '../styles/index.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/pos" component={Pos} />
					<Route path="*" component={NotFound}/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;