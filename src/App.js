import React, {Component} from "react";
import {connect} from "react-redux";
import Question from "./components/question";
import {selectLanguage} from "./actions/quiz.action";
import Button from "react-bootstrap/lib/Button";
import Well from "react-bootstrap/lib/Well";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: window.quizData,
		};
		
		this.onSelectLanguage = this.onSelectLanguage.bind(this);
	}
	
	onSelectLanguage(e) {
		e.persist();
		console.dir(e.target);
		console.log(e.target.dataset.code);
		this.props.dispatch(selectLanguage(e.target.dataset.code));
	}
	
	render() {
		return (
			<Well className="quiz_app_inner">
				<div className="App-header">
					<h1 className="App-title">Выберите тест</h1>
				</div>
				
				{!this.props.quiz.title ?
					<ul className="list-unstyled">
						{this.state.data.map(item => {
							return (
								<li key={item.code}>
									<Button onClick={this.onSelectLanguage}
											data-code={item.code}
											bsStyle="primary"
											block={true}
											className="sLang-btn"
									>{item.title}</Button>
								</li>
							)
						})
						}
					</ul> : <Question />
				}
				<hr/>
			</Well>
		);
	}
}

function mapStatesToProps(state) {
	return {
		quiz: state.quiz
	}
}

export default connect(mapStatesToProps)(App);
