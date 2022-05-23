/**lifecycle methods in react include mounting updating and unmounting and each
 * have their own methods(lifecycle hooks).Each of these methods is called in the lifecycle of a component.
 * for example mounting includes constructor,componentWillMount,render,componentDidMount methods(which are executed one after 
 * another)
 */
import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './app.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundaries';

class App extends React.Component{
    constructor(){
        super();
        this.state={    
            robots:[],
            searchfield:''
        };
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        });
        
    }
    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                {/* If anything in the card list fails it catches it and displays error rather than breaking
                the whole page */}
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
export default App;