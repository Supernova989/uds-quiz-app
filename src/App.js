import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./components/question";
import { selectLanguage } from "./actions/quiz.action";
import Button from "react-bootstrap/lib/Button";
import Well from "react-bootstrap/lib/Well";
import ResultList from "./components/result_list";
import ProgressBar from "react-bootstrap/lib/ProgressBar";

class App extends Component {
	constructor(props) {
		super(props);
		
		this.onSelectLanguage = this.onSelectLanguage.bind(this);
	}
	
	onSelectLanguage(e) {
		e.persist();
		this.props.dispatch(selectLanguage(e.target.dataset.code));
	}
	
	render() {
		const showResults = this.props.quiz.currentQuestion === this.props.quiz.questions.length
			&& this.props.quiz.questions.length > 0;
		
		let progress = 0;
		if (this.props.quiz.currentQuestion > 0) {
			progress = 100 * this.props.quiz.currentQuestion / this.props.quiz.questions.length;
		}
		
		return (
			<Well className="quiz_app_inner">
				
				{this.props.quiz.title && <ProgressBar active now={progress} />}
				
				{!this.props.quiz.title ?
					<section>
						<div className="App-header">
							<h1 className="App-title">Выберите тест</h1>
						</div>
						<ul className="list-unstyled">
							{this.props.quiz.data.map(item => {
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
						</ul>
					</section>
					: showResults ? <ResultList /> : <Question/>
				}
				
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
