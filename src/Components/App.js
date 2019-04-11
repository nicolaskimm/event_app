import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import EventsContainer from './EventsContainer/EventsContainer';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import SingleEventInfo from './SingleEventInfo/SingleEventInfo';
import uuidv5 from "uuid";
import 'moment/locale/pl';


import Test from './Test/Test';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Nick Cave',
          description: 'xyz',
          place: 'Torwar',
          city: 'Warsaw',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Red Hot Chilli Peppers',
          description: 'xyz',
          place: 'Klub Harenda',
          city: 'Warsaw',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/1736222/pexels-photo-1736222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Mirosław Bałka',
          description: 'xyz',
          place: 'MOCAK',
          city: 'Kraków',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'sztuka',
        },
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Red Hot Chilli Peppers',
          description: 'xyz',
          place: 'Klub Harenda',
          city: 'Warsaw',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/1736222/pexels-photo-1736222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Mirosław Bałka',
          description: 'xyz',
          place: 'MOCAK',
          city: 'Kraków',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'sztuka',
        }
      ],
      filtered: [],
      organisator: '',
      description: '',
      endDate: null,
      startDate: null,
      place: '',
      city: '',
      category: '',
      search: '',
      focusedInput: null,
      currentImageIndex: 1,
      promotedEvents: [
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Nick Cave',
          description: 'xyz',
          place: 'Torwar',
          city: 'Warsaw',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Red Hot Chilli Peppers',
          description: 'xyz',
          place: 'Klub Harenda',
          city: 'Warsaw',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/1736222/pexels-photo-1736222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Mirosław Bałka',
          description: 'xyz',
          place: 'MOCAK',
          city: 'Kraków',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'sztuka',
        }
      ],
      promotedUrls: [],
      clickedEvent: ''
    }

    this.handleValue.bind(this);
    this.handleDate.bind(this);
    this.handleDelete.bind(this);
    this.onFocusChange.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.checkStuff.bind(this);
  }

  componentWillMount(){
    this.getPromotedUrls();
  }

  getPromotedUrls(){
    const urls = this.state.promotedEvents.map(item => {
      return item.imgUrl
    })

    this.setState({
      promotedUrls: urls
    })
  }

  handleValue(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleDate(startDate, endDate) {
    this.setState({
      startDate: startDate,
      endDate: endDate,
    })
  }

  formatDate(date){
    return date.format('DD-MM-YYYY')
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  addEvent(){
    const newEvent = {
      id: uuidv5(),
      organisator: this.state.organisator,
      description: this.state.description,
      place: this.state.place,
      city: this.state.city,
      startDate: this.state.startDate.locale('pl').format('LL'),
      endDate: this.state.endDate.locale('pl').format('LL'),
      category: this.state.category
    }
    this.setState({
      events: [...this.state.events, newEvent]
    }) 
  }

  checkStuff(id){
    const properEvent = this.state.events.filter(item =>
      item.id === id
    )

    this.setState({
      clickedEvent: properEvent
    })
  }

  handleDelete(e){
    const el = e.target.parentNode.id;
    const arr = this.state.events.filter(elem => elem.id !== el);
    this.setState({
      events: arr
    })
  }

  editElement(e){
    const parentEl = e.target.parentNode;
    parentEl.setAttribute('contenteditable', 'true');
  }

  previousSlide () {
		const lastIndex = this.state.promotedUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
    const lastIndex = this.state.promotedUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  checkNextSlide() {
    const imgUrls = this.state.promotedUrls;
    const currIndex = this.state.currentImageIndex;

    if (imgUrls[currIndex + 1]) {
        return imgUrls[currIndex + 1]
    } else {
        return imgUrls[0]
    }
  }

  checkPreviousSlide(){
    const imgUrls = this.state.promotedUrls;
    const currIndex = this.state.currentImageIndex;

    if (imgUrls[currIndex - 1]) {
        return imgUrls[currIndex - 1]
    } else {
        return imgUrls[imgUrls.length - 1]
    }
  }

  render() {
    let filteredEvents = this.state.events.filter(item => {
      return item.organisator.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 })

    return (
      <div className='App'>
        <Navigation />

        <Switch>
          <Route
            exact path='/events/:id'
            render={(routeProps) => (
              <SingleEventInfo
                {...routeProps}
                eventClicked = {this.state.clickedEvent}
              />
            )}
          >
          </Route>
          <Route 
            exact path='/' 
            render={(routeProps) => (
              <Home
                {...routeProps}
                imgUrls = {this.state.promotedUrls}
                promotedEvents = {this.state.promotedEvents}
                currentImageIndex = {this.state.currentImageIndex}
                previousSlide = {this.previousSlide.bind(this)}
                nextSlide = {this.nextSlide.bind(this)}
                checkNext = {this.checkNextSlide.bind(this)}
                checkPrevious = {this.checkPreviousSlide.bind(this)}
              />
            )}
          />
          <Route path='/test' component={Test} />
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
                organisator = {this.state.organisator}
                description = {this.state.description}
                place = {this.state.place}
                city = {this.state.city}
                category = {this.state.category}
                search = {this.state.search}
                id = {this.state.id}

                endDate = {this.state.endDate}
                startDate = {this.state.startDate}
                focusedInput = {this.state.focusedInput}
                onFocusChange = {this.onFocusChange.bind(this)}
                handleDate = {this.handleDate.bind(this)}
                editElement = {this.editElement.bind(this)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
