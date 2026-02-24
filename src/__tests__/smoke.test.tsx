import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import { describe, it, expect, vi } from 'vitest'

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
            changeLanguage: () => new Promise(() => { }),
            language: 'en'
        },
    }),
}));

describe('Home Page', () => {
    it('renders the main heading', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeDefined()
    })
})
