import Textarea from '../Textarea/Textarea';
import Keyboard from '../Keyboard/Keyboard';
import './App.scss';

class App {
  constructor(props) {
    this.props = props;
    this.textarea = new Textarea();
    this.keyboard = new Keyboard({
      onClick: this.keyboardHandleClick,
      onMouseDown: this.keyboardHandleMouseDown,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  keyboardHandleClick(e) {
    const button = e.target.closest('button');

    if (button) {
      const keyboard = document.querySelector('.textarea');
      const buttonValues = button.innerText.split('\n');
      const mainButtonValue = buttonValues[buttonValues.length - 1];

      keyboard.value += mainButtonValue;
      keyboard.focus();
    }
  }

  render() {
    const virtualKeyboard = document.createElement('div');
    virtualKeyboard.classList.add('virtual-keyboard');

    const textBlock = document.createElement('div');
    textBlock.classList.add('virtual-keyboard__text-block');

    const OSText = document.createElement('p');
    OSText.innerText = 'The keyboard was created in the Windows operating system.';
    const languageText = document.createElement('p');
    languageText.innerText = 'To switch the language combination: left shift + alt.';

    textBlock.append(OSText, languageText);
    virtualKeyboard.append(this.textarea.render(), this.keyboard.render(), textBlock);

    return virtualKeyboard;
  }
}

export default App;
