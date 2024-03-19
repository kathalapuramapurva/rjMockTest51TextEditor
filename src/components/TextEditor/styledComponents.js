import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  padding: 20px;
  width: 100%;
  width: 80vw;
  height: 70vh;
`

export const TextEditorImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`

export const TextEditorImage = styled.img`
  width: 90%;
  margin: auto;
`

export const ButtonTextAreaContainer = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  width: 55%;
`

export const ButtonsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  padding: 13px 15px;
  border-bottom: 1px solid #cbd5e1;
  margin: 0px;
`

export const ListItem = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  flex-grow: 1;
  background-color: transparent;
  outline: none;
`
