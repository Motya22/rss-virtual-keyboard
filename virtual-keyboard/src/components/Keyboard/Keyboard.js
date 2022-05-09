import mockKeyboardMarkup from '../../MOCK/mock_keyboardMarkup';
import mockButtons from '../../MOCK/mock_buttons';
import Button from '../Button/Button';
import './Keyboard.scss';

class Keyboard {
  constructor(props) {
    this.props = props;
    this.keyboardMarkup = mockKeyboardMarkup;
    this.buttons = mockButtons;
  }

  get buttonsOrder() {
    return this.keyboardMarkup.reduce((order, markupRow) => {
      const buttonRow = markupRow.map((markupValue) => {
        const buttonData = this.buttons.find((button) => button.value === markupValue);
        const {
          value, secondValue, type, keyCode,
        } = buttonData;

        return new Button({
          value, secondValue, type, keyCode,
        });
      });

      order.push(...buttonRow);

      return order;
    }, []);
  }

  // eslint-disable-next-line class-methods-use-this
  handle(e) {
    const button = e.target.closest('button');

    if (button) {
      button.classList.toggle('active');
    }
  }

  render() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('virtual-keyboard__keyboard', 'keyboard');
    keyboard.addEventListener('click', this.props.onClick);
    // eslint-disable-next-line no-multi-assign
    keyboard.onmousedown = keyboard.onmouseup = this.handle;

    this.buttonsOrder.forEach((button) => keyboard.append(button.render()));

    return keyboard;
  }
}

export default Keyboard;
