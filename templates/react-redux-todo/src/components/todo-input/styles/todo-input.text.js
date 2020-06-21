import styled from 'styled-components';

export const TodoInputText = styled.input.attrs(() => ({
    type: 'text',
    placeholder: 'What do you want to do?'
}))`
    padding: .5rem;
    flex-grow: 3;
`;