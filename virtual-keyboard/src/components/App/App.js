import './App.scss';

class App {
  constructor(props) {
    this.props = props;
  }

  render() {
    const virtualKeyboard = document.createElement('div');

    virtualKeyboard.classList.add('virtual-keyboard');
    virtualKeyboard.innerText = this.props.innerText;

    return virtualKeyboard;
  }
}

export default App;
