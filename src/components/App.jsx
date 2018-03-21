import React, { Component } from 'react';
import { connect } from 'react-redux';
import { base } from '../firebase';
import AddGoal  from './AddGoal';
import GoalList  from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  signOut(){
    base.auth().signOut()
  }

  render(){
    return(
      <div style={{margin: '5px'}}> 
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <button 
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
        Sign Out
        </button>
      </div>
    )
  }
}

//maps state to props
function mapStateToProps(state){
  // console.log('state at map state', state)
  return {
    state
  }
}


export default connect(mapStateToProps,null)(App);