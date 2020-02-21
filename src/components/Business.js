import React from 'react'
import businesses from '../businesses.json'
import { Container, Paper, Chip } from '@material-ui/core';

const Business = (props) => {
    const id = parseInt(props.match.params.id)
    const business = businesses.find(b => b.id === id)
    
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{business.name}</h2>
                {
                    Object.keys(business).map((key) => {
                        return <Chip label={`${key}: ${business[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Business