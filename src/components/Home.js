import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import businesses from '../businesses.json'
import { Link } from 'react-router-dom'


const Home = () => {
    console.log('BUSINESSES: ', businesses)
    return (
        <div className="card-container">
            {businesses.map((business, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{business.name.toUpperCase()}</span>
                        <ul>
                        <li>Address: {business["address"]}</li>
                        <li>Open Hours: {business["hours"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${business.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home