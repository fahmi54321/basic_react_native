import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class MyText extends Component {
  constructor(props) {
    super(props);

    /** Initial State */
    this.state = {
      fullName: props.name + 'Abdul Aziz',
    };
  }

  /** Lifecycle */
  componentDidMount() {
    /** Is called right after the component is rendered */
    /** Perform some setup for example fetching data from an API */
    console.log('Component is mounted');
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    console.log('Checking if component should update');
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
  ): any {
    console.log('Getting snapshot before component updates');
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    /** Called when state or props of the application is updated */
    console.log('Component has updated', prevState, this.state);
    return null;
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <SafeAreaView>
        <Text
          onPress={() => {
            // this.setState({name: 'Fahmi'});
            this.setState({...this.state, ...{fullName: 'Fahmi A.A'}});
          }}>
          Hello, {this.props.fullName}, I Know that your full name is{' '}
          {this.state.fullName}
        </Text>
      </SafeAreaView>
    );
  }
}

export default MyText;
