import './Button.scss';

const ValueToClassNameMap = {
  Backspace: 'button_backspace',
  'Caps Lock': 'button_capslock',
  ENTER: 'button_enter',
  LShift: 'button_left-shift',
  Whitespace: 'button_whitespace',
};

const ValueToInnerHTMLMap = {
  LShift: 'Shift',
  RShift: 'Shift',
  LCtrl: 'Ctrl',
  LAlt: 'Alt',
  Whitespace: '',
  RAlt: 'Alt',
  RCtrl: 'Ctrl',
};

class Button {
  constructor(props) {
    this.props = props;
  }

  render() {
    const buttonClasses = ['keyboard__button', 'button'];

    if (this.props.type === 'modifier') {
      buttonClasses.push('button_modifier');
    }
    if (ValueToClassNameMap[this.props.value]) {
      buttonClasses.push(ValueToClassNameMap[this.props.value]);
    }

    const button = document.createElement('button');
    buttonClasses.forEach((buttonClass) => button.classList.add(buttonClass));
    button.dataset.code = this.props.keyCode;
    button.innerHTML = ValueToInnerHTMLMap[this.props.value] || this.props.value;

    if (this.props.secondValue) {
      const span = document.createElement('span');
      span.innerText = this.props.secondValue;
      button.prepend(span);
    }

    return button;
  }
}

export default Button;
