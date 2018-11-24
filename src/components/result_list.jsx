import React, { Component } from "react";
import { connect } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
import Alert from "react-bootstrap/lib/Alert";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { store } from '../store';
import { abort_quiz } from "../actions/quiz.action";

class ResultList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onAbort = this.onAbort.bind(this);
	}
	
	render() {
		
		let questions = cloneDeep(this.props.quiz.data.find((q) => {
			return q.code === this.props.quiz.code;
		}).questions);
		// console.log("here =>", question);
		
		let correct_counter = 0;
		
		questions.forEach(question => {
			const correct_answer = question.options[question.answer];
			let option_given = null;
			const isCorrect = question.answer.toLowerCase() === this.props.quiz.answersGiven.find((answer) => {
				if (answer.id === question.id) {
					option_given = answer.option;
					return true;
				}
				return false;
			}).option.toLowerCase();
			
			if (!isCorrect) {
				question.title = question.title.replace(/(_)+/,
					`<span class="wrong-answer">${question.options[option_given]}</span>
					<span class="correct-answer"><b>${correct_answer}</b></span>`
				);
			} else {
				question.title = question.title.replace(/(_)+/,
					`<span className="correct-answer"><b>${correct_answer}</b></span>`
				);
				correct_counter += 1;
			}
			question.isCorrect = isCorrect;
		});
		
		return (
			<section>
				<h3>Тест завершен!</h3>
				<h4>Правильный ответ дан на {correct_counter}/{questions.length} вопросов.</h4>
				<br />
				{questions.map(question => {
					const key = question.id;
					return (
						<div key={key}>
							<span>Ответ #{question.id}</span>
							<Alert bsStyle={question.isCorrect ? 'success' : 'danger'}>
								<div  dangerouslySetInnerHTML={{__html: question.title}}/>
							</Alert>
						</div>
					)
				})}
				
				<Row>
					<Col sm={6} xs={12}>
					
					</Col>
				</Row>
				
				<hr/>
				<div className='question-actions'>
					<Button bsStyle="danger" onClick={this.onAbort}>Завершить тест</Button>
				</div>
			</section>
		)
	}
	
	onAbort() {
		store.dispatch(abort_quiz());
	}
	
}

function mapStatesToProps(state) {
	return {
		quiz: state.quiz
	}
}

export default connect(mapStatesToProps)(ResultList);
