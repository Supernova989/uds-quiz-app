import React, { Component } from "react";
import { connect } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
import Alert from "react-bootstrap/lib/Alert";
import Badge from "react-bootstrap/lib/Badge";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Well from "react-bootstrap/lib/Well";
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
					`<span class="text-danger text-line-through">${question.options[option_given]}</span>
					<span class="text-success"><b>${correct_answer}</b></span>`
				);
			} else {
				question.title = question.title.replace(/(_)+/,
					`<span className="text-success"><b>${correct_answer}</b></span>`
				);
			}
			question.isCorrect = isCorrect;
		});
		
		return (
			<section>
				<h2>Результат теста</h2>
				{questions.map(question => {
					const key = question.id;
					return (
						<Alert>
							<div key={key} dangerouslySetInnerHTML={{__html: question.title}}/>
						</Alert>
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
