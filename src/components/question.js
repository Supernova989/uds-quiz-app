import React, {Component} from "react";
import {connect} from "react-redux";
import Alert from "react-bootstrap/lib/Alert";
import Badge from "react-bootstrap/lib/Badge";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Well from "react-bootstrap/lib/Well";

class Question extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const q = this.props.quiz.questions[this.props.quiz.currentQuestion];
		return (
			<section>
				<Alert>{q.title}</Alert>
				
				<Row>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button bsStyle="primary" block><Badge>A</Badge> {q.options.a1}</Button>
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button bsStyle="primary" block><Badge>B</Badge> {q.options.a2}</Button>
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button bsStyle="primary" block><Badge>C</Badge> {q.options.a3}</Button>
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Button bsStyle="primary" block><Badge>D</Badge> {q.options.a4}</Button>
						</div>
					</Col>
				</Row>
				
				<hr/>
				<Button bsStyle="danger">Завершить тест</Button>
			</section>
		)
	}
}

function mapStatesToProps(state) {
	return {
		quiz: state.quiz
	}
}

export default connect(mapStatesToProps)(Question);
