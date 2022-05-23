import React from "react";


class ErrorBoundary extends React{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        };
    }
    /**Lifecycle method(similar to try catch block) */
    componentDidCatch(error,info){
        /**We set hasError to true */
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
};

export default ErrorBoundary;