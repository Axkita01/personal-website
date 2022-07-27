import {Card} from 'react-bootstrap';

export default function ProjectCard(props) {
    const radius = props.windowWidth > 600 ? '10px': '5px'
    return (
        <Card 
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
                style = {{marginLeft: '5%', marginBottom: 0}}>
                    {props.title}
                </Card.Title>

                <Card.Text style = {{marginLeft: '5%', marginTop: 0, fontSize: '1rem'}}>
                    {props.desc}
                </Card.Text>

                <Card.Text style = {{marginLeft: '5%', marginTop: 0}}>
                <strong>Link: &nbsp;</strong>
                <Card.Link 
                as = {props.link.slice(-1) !== '.' ? 'a': 'text'} 
                href = {props.link}>
                    {props.link}
                </Card.Link>
                </Card.Text>

                <Card.Text style = {{marginLeft: '5%', marginTop: 0}}>
                    <strong>GitHub Repository: &nbsp;</strong>
                    <Card.Link href = {props.git}>
                        {props.git}
                    </Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}