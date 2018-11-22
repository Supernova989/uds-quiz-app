import React, { Component } from "react";
import { connect } from "react-redux";
import Alert from "react-bootstrap/lib/Alert";
import Badge from "react-bootstrap/lib/Badge";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Well from "react-bootstrap/lib/Well";
import { store } from '../store';
import { abort_quiz, accept_answer } from "../actions/quiz.action";

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			option: null
		};
		
		this.onAbort = this.onAbort.bind(this);
		this.acceptAnswer = this.acceptAnswer.bind(this);
	}
	
	render() {
		const q = this.props.quiz.questions[this.props.quiz.currentQuestion];
		return (
			<section>
				<Alert>{q.title}</Alert>
				
				<Row>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button
								onClick={this.pickAnswer(q.id, 'a1')}
								bsStyle={this.state.option === 'a1' ? "warning" : "primary"}
								block
							>
								<Badge>A</Badge> {q.options.a1}
							</Button>
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button
								bsStyle={this.state.option === 'a2' ? "warning" : "primary"}
								onClick={this.pickAnswer(q.id, 'a2')}
								block
							>
								<Badge>B</Badge> {q.options.a2}
							</Button>
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button
								bsStyle={this.state.option === 'a3' ? "warning" : "primary"}
								onClick={this.pickAnswer(q.id, 'a3')}
								block
							>
								<Badge>C</Badge> {q.options.a3}
							</Button>
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button
								bsStyle={this.state.option === 'a4' ? "warning" : "primary"}
								onClick={this.pickAnswer(q.id, 'a4')}
								block
							>
								<Badge>D</Badge> {q.options.a4}
							</Button>
						</div>
					</Col>
				</Row>
				
				<hr/>
				<div className='question-actions'>
					<Button bsStyle="danger" onClick={this.onAbort}>Завершить тест</Button>
					<Button
						disabled={this.state.option ? false : true}
						bsStyle="success"
						onClick={this.acceptAnswer}>Подтвердить</Button>
				</div>
			</section>
		)
	}
	
	onAbort() {
		store.dispatch(abort_quiz());
	}
	
	pickAnswer = (id, option) => () => {
		this.setState({
			id,
			option
		});
	};
	
	acceptAnswer() {
		store.dispatch(accept_answer(this.state.id, this.state.option));
		this.setState({id: null, option: null});
	}
}

function mapStatesToProps(state) {
	return {
		quiz: state.quiz
	}
}

export default connect(mapStatesToProps)(Question);
