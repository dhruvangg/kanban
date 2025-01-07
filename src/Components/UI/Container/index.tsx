import styled from "styled-components"

const Div = styled.div`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;`

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <Div className="container">{children}</Div>
}


