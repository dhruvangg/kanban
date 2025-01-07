import styled from "styled-components"

interface InputProps {
    type: string
    placeholder: string
    className?: string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = styled.input`
    border: 1px solid var(--secondary-text);
    border-radius: 0.25rem;
    padding: 0.5rem;
    width: 100%;`

export const Input = ({ type, placeholder, name, value, className, onChange }: InputProps) => {
    return <InputField type={type} placeholder={placeholder} className={className} name={name} value={value} onChange={onChange} />
}