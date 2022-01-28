import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions';

class GoogleAuth extends React.Component{ 
    // google OAuth api calls and promices and callbacks 
    componentDidMount() {
        window.gapi.load('client: auth2',() =>{
            window.gapi.client.init({
                clientId: '295968964508-nvgdrf39kkg7gg95io7lk2d9tijt33dt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onSignChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onSignChange);
            });
        });
    };

    onSignChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    //render test fucntion for successfull sign in or sign up
    renderList = () => {
        if(this.props.isSignedIn === false){
            return (
                <button onClick={() => this.auth.signIn()} className='ui blue google button'>
                <i className='google icon'></i>Sign In with Google</button>
            );
        }
        else if(this.props.isSignedIn === true){
            return (
                <button onClick={() => this.auth.signOut()} className='ui red google button'>
                <i className='google icon'></i>Sign Out</button>
            );
        }
        else{
            return <h6>Loading..</h6>
        }
    }
    render() {
        return(
            <div>{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userName};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);