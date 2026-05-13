import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<State> {
  state = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    console.log(event.key);
    this.setState({ key: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
