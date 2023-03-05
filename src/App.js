import { Component } from '../src/core/Component';
import '../src/components/templates/Header';

class App extends Component {
  render() {
    return `
      <it-header></it-header>
    `;
  }
}

customElements.define('it-app', App);
