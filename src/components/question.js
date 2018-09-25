import React, {Component} from "react";
import {connect} from "react-redux";
import Alert from "react-bootstrap/lib/Alert";
import Badge from "react-bootstrap/lib/Badge";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

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
							<Badge>A</Badge> {q.options.a1}
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Badge>B</Badge> {q.options.a2}
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Badge>C</Badge> {q.options.a3}
						</div>
					</Col>
					<Col sm={6} xs={12}>
						<div className="answer_wrap">
							<Badge>D</Badge> {q.options.a4}
						</div>
					</Col>
				</Row>
			
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
