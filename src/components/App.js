import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

// calendar is the state, it is the state no matter what you name it.
// The state is originally created from the index.js reducer which creates
// the state from an initialCalendarState object (see src/reducers/index.js)
//
// Within this function the state is refactored from an object into an array.

function mapStateToProps (calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      //                                        acc    obj
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal] // ternary if there is a meal keep it else null
          : null

        return meals
      }, {}) // this last arg is the original obj i.e. meal
    })),
  }
}

export default connect(mapStateToProps)(App);
