import styled from 'styled-components';

export const TodoSubmitButton = styled.button.attrs(() => ({
    type: 'submit'
}))`
    padding: .5rem;
    flex-grow: 1;
    margin-left: 1rem;
`;