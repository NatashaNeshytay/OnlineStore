import { Component } from '../../core/Component';

class Header extends Component {
  render() {
    return `
        <header>
          
          <nav class="navbar navbar-expand-lg mt-3">
            <div class="container">
              <div class="collapse navbar-collapse d-flex justify-content-between">
                <ul class="navbar-nav">
    
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Одежда</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Обувь</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Аксессуары</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Спорт</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: #f93c00" href="#">Sale%</a>
                  </li>
                </ul>
    
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        `;
  }
}

customElements.define('it-header', Header);
