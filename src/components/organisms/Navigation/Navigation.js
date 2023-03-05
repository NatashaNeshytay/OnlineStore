import { Component } from '../../../core/Component';

class Navigation extends Component {
  render() {
    return `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <div class="collapse navbar-collapse d-flex justify-content-between">
            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" href="#">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Блог</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Контакты</a>
              </li>
            </ul>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link position-relative" href="#">
                  <img src="./assets/images/icons/cart.svg" alt="cart" width="24" height="24">
                  <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
