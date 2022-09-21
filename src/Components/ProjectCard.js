import {Card} from 'react-bootstrap';
import '../Styles/Card.css'
import React from 'react';

export default function ProjectCard(props) {
    const radius = props.windowWidth > 600 ? '10px': '5px'
    return (
        <Card
        className = 'card'
        style = {{
            width: '50%',
            borderStyle: 'solid',
            borderRadius: radius,
            background: 'white',
            marginBottom: '4%'
        }}>
            <Card.Body>
                <Card.Title 
                as = 'h3' 
                style = {{marginLeft: '5%', marginBottom: 0}}
                className = 'card-title'>
                    {props.title}
                </Card.Title>

                <Card.Text 
                className = 'card-desc'
                style = {{marginLeft: '5%', marginTop: 0, fontSize: '1rem'}}>
                    {props.desc}
                </Card.Text>

                <Card.Text style = {{marginLeft: '5%', marginTop: 0}}>
                <Card.Link
                classname = 'card-link'
                as = {props.link.slice(-1) !== '.' ? 'a': 'text'} 
                href = {props.link} target="_blank">
                    {props.link.slice(-1) !== '.' ? 'Link': props.link}
                </Card.Link>
                </Card.Text>

                <Card.Text style = {{marginLeft: '5%', marginTop: 0}}>
                    <Card.Link href = {props.git} target="_blank" classname = 'card-link'>
                        Git Repository
                    </Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}