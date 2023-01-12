import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import OlderSeries from "../OlderSeries"

jest.mock("../../../lib/request");

describe('first', () => { 
    
    test('should first', async() => { 

        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation(() => ({
              addListener: jest.fn(),
              removeListener: jest.fn(),
            })),
          });

        render(<OlderSeries />, {wrapper: BrowserRouter})
          
        await waitFor(() => {
            expect(screen.getByTestId('olderSeries--title').textContent).toMatch("TOM's OLDER SERIES👵")
        })
    
    })
 })