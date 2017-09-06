import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {
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

// Use mapDispatchToProps so that you can call this.props.selectRecipe({})
// rather than this.props.dispatch(addRecipe{})

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
