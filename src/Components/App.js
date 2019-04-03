import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import EventsContainer from './EventsContainer/EventsContainer';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import uuidv5 from "uuid";
import moment from 'moment';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [
        {
          id: uuidv5(),
          title: 'Koncert',
          organisator: 'Kolo',
          description: 'Super koncert',
          place: 'gdzieś',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: '#muzyka'
        },
        {
          id: uuidv5(),
          title: 'Imprezka',
          organisator: 'Stefan',
          description: 'Szaleństwo %%%',
          place: 'Klubik',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: '#impreza'
        },
        {
          id: uuidv5(),
          title: 'Koncert',
          organisator: 'Kolo',
          description: 'Super koncert',
          place: 'gdzieś',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: '#muzyka'
        },
      ],
      filtered: [],
      title: '',
      organisator: '',
      description: '',
      endDate: null,
      startDate: null,
      place: '',
      category: '',
      search: '',
      focusedInput: null,
    }
    this.handleValue.bind(this);
    this.handleDate.bind(this);
    this.handleDelete.bind(this);
    this.onFocusChange.bind(this);
  }

  handleValue(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleDate(startDate, endDate) {
    const stary = moment(startDate).utc();
    console.log(stary)
    this.setState({
      endDate: endDate,
      startDate: startDate
    })
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  addEvent(){
    const newEvent = {
      id: uuidv5(),
      title: this.state.title,
      organisator: this.state.organisator,
      description: this.state.description,
      place: this.state.place,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      category: this.state.category
    }
    this.setState({
      events: [...this.state.events, newEvent]
    }) 
  }

  checkStuff(){
    this.state.events.map(item => (
      console.log(item.id)
    ));

  }

  onClick(){
    console.log('klik tag');
  }

  handleDelete(e){
    const el = e.target.parentNode.id;
    const arr = this.state.events.filter(elem => elem.id !== el);
    this.setState({
      events: arr
    })
    
  }

  render() {
    let filteredEvents = this.state.events.filter(item => {
      return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 })

    return (
      <div className='App'>
        <Navigation />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
            exact path='/wydarzenia' 
            render={(routeProps) => (
              <EventsContainer 
                {...routeProps} 
                eventsik = {filteredEvents}
                handleValue = {this.handleValue.bind(this)}
                addEvent = {this.addEvent.bind(this)}
                handleDelete = {this.handleDelete.bind(this)}
                checkStuff = {this.checkStuff.bind(this)}
                title = {this.state.title}
                organisator = {this.state.organisator}
                description = {this.state.description}
                place = {this.state.place}
                category = {this.state.category}
                search = {this.state.search}
                id = {this.state.id}

                endDate = {this.state.endDate}
                startDate = {this.state.startDate}
                focusedInput = {this.state.focusedInput}
                onFocusChange = {this.onFocusChange.bind(this)}
                handleDate = {this.handleDate.bind(this)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
