import React, {Component} from 'react';
import SignupForm from './SignupForm';

export default class extends Component {
	render(){
		return(
				<div className='signupBox'>
					<SignupForm />
				</div>
		);
	}
}