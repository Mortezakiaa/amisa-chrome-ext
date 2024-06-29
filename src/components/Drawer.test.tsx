import {render , screen} from '@testing-library/react'
import Drawer from './Drawer'

describe('' , ()=>{
    test('init',()=>{
        render(<Drawer/>)
        expect(screen.getByText('بک گراند')).toBeInTheDocument()
    })
})