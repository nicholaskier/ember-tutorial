import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@glimmer/object'

export default class ProductComponent extends Component {
   productImage = this.args.product.colors[0].image;

}
