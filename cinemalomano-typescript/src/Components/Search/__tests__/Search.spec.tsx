/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Search } from "../Search"


describe('Render the Search component', () => {

    const handleInput = () => {}
    let search = ''

    const setUp = () => render(<Search handleInput={handleInput} search={search} />)

    test('Input Search', ()=>{
       setUp()
        const placeholderInput = screen.getByPlaceholderText('Search')
        expect(placeholderInput).toBeDefined()
    })

}) 