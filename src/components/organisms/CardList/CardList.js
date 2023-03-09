import { Component } from '../../../core/Component';
import '../../molecules/Card';

class CardList extends Component {
  static get observedAttributes() {
    return ['products'];
  }
  render() {
    const { products } = this.props;
    return `
        <div class="row">
        ${products.map((item) => {
          return `
            <div class="col-sm-3 mb-3">
                <it-card
                    image='${item.image[0]}'
                    title='${item.title}'
                    price='${item.price}'
                    description='${item.description}'
                ></it-card>
            </div>
            `;
        })}
        </div>
        `;
  }
}

customElements.define('card-list', CardList);
