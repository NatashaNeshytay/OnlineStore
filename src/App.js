import { Component } from './core/Component';
import { appCategories } from './constants/appCategories';
import { routes } from './constants/routes';
import './components/molecules/Footer';
import './components/templates/Header';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class='main-layout'>
        <it-header categories='${JSON.stringify(appCategories)}'></it-header>
        <main>
                  ${
                    routes.find((route) => route.href === pathname)?.component ??
                    '<eroor-page></error-page>'
                  }
          </main>
        <it-footer></it-footer>
      </div>
    `;
  }
}

customElements.define('it-app', App);
