import './Textarea.scss';

class Textarea {
  constructor(props) {
    this.props = props;
  }

  // eslint-disable-next-line class-methods-use-this
  handle(e) {
    const button = document.querySelector(`button[data-code=${e.code}]`);

    if (button) {
      if (e.type === 'keydown') {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    }
  }

  render() {
    const textarea = document.createElement('textarea');
    textarea.classList.add('virtual-keyboard__textarea', 'textarea');

    textarea.setAttribute('autofocus', '');

    // eslint-disable-next-line no-multi-assign
    textarea.onkeydown = textarea.onkeyup = this.handle;

    return textarea;
  }
}

export default Textarea;
