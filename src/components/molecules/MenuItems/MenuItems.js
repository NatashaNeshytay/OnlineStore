import { Component } from '../../../core/Component';

class MenuItems extends Component {
  static get observedAttributes() {
    return ['items'];
  }
  render() {
    const items = JSON.parse(this.props.items);

    return `
        <ul class="navbar-nav">
    ${items
      .map((item) => {
        return `
      <li class="nav-item">
      <a class="nav-link active" href="${item.href}">${item.label}</a>
    </li>
    `;
      })
      .join(' ')}  
      </ul>
        `;
  }
}

customElements.define('menu-items', MenuItems);
