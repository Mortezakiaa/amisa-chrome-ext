import {render , screen} from '@testing-library/react'
import EventCard from './EventCard'

describe('',()=>{
    test('init',()=>{
        render(<EventCard eventTitle='test event title' id='123'/>)
        expect(screen.getByText('test event title')).toBeInTheDocument()
    })
})