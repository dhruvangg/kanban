import styled, { css } from "styled-components"

interface ButtonProps {
    variant: "primary" | "secondary"
    children: React.ReactNode
    type: string
    onClick?: () => void
}

export const Button = styled.button<ButtonProps>`
    ${({ variant }) =>
        variant === "primary" &&
        css`
            background-color: var(--action-color);
        `
    }
    ${({ variant }) =>
        variant === "secondary" &&
        css`
            background-color: var(--secondary-text);
        `
    }
    color: var(--background-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all ease 300ms;`
