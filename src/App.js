import { Component } from '../src/core/Component';
import '../src/components/templates/Header';

class App extends Component {
  render() {
    return `
      <div class='main-layout'>
        <it-header></it-header>
      </div>  
    `;
  }
}

customElements.define('it-app', App);
