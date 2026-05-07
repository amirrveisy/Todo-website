import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'


import Task from '../Components/Task'

test('Making sure the content is displayed' ,()=>{

    const givenDate=  "Amirreza"

    render(<Task task={givenDate}/>)
    expect(screen.getByText(givenDate)).toBeVisible()

 } )

 test('Making sure the button works' ,async()=>{
    const mock= vi.fn()
    const user= userEvent.setup()


    render(<Task task={",,"} fun={mock}/>)
    screen.debug()
    const butt= screen.getByTestId('button')
    await user.click(butt)

    expect(mock).toHaveBeenCalled()

 } )