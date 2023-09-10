import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListingPage from './ProductListingPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route  path="/subcategory/:subcategoryName" component={ProductListingPage} />
            </Switch>
        </Router>
    )
}

export default Routes
