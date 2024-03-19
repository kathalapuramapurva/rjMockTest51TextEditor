import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextEditorContainer,
  TextEditorImageContainer,
  Heading,
  TextEditorImage,
  ButtonTextAreaContainer,
  ButtonsContainer,
  ListItem,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onToggleBold = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onToggleItalic = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onToggleUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <AppContainer>
        <TextEditorContainer>
          <TextEditorImageContainer>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImageContainer>
          <ButtonTextAreaContainer>
            <ButtonsContainer>
              <ListItem>
                <Button
                  type="button"
                  data-testid="bold"
                  onClick={this.onToggleBold}
                  isActive={isBoldActive}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  data-testid="italic"
                  onClick={this.onToggleItalic}
                  isActive={isItalicActive}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  data-testid="underline"
                  onClick={this.onToggleUnderline}
                  isActive={isUnderlineActive}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </ButtonsContainer>
            <TextArea
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderlineActive}
            />
          </ButtonTextAreaContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
