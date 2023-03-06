import {Component} from 'react'
import {
  DivContainer,
  Heading,
  Form,
  LabelName,
  Input,
  TopInput,
  BottomInput,
  FormButton,
  Selector,
  Option,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    meme: false,
    url: '',
    topName: '',
    bottomName: '',
    fontSize: fontSizesOptionsList[0].displayText,
  }

  onCreateMeme = event => {
    const {fontSize} = this.state
    event.preventDefault()
    console.log(fontSize)
    this.setState({meme: true})
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopInput = event => {
    this.setState({topName: event.target.value})
  }

  onChangeBottomInput = event => {
    this.setState({bottomName: event.target.value})
  }

  render() {
    const {meme, url, topName, bottomName, fontSize} = this.state
    return (
      <DivContainer>
        <Heading>Meme Generator</Heading>
        {meme && <p>Hello</p>}
        <Form onSubmit={this.onCreateMeme}>
          <LabelName htmlFor="imageUrl">Image URL</LabelName>
          <Input
            value={url}
            id="imageUrl"
            type="text"
            onChange={this.onChangeUrl}
          />
          <LabelName htmlFor="topName">Top Text</LabelName>
          <TopInput
            value={topName}
            id="topName"
            type="text"
            onChange={this.onChangeTopInput}
          />
          <LabelName htmlFor="bottomName">Bottom Text</LabelName>
          <BottomInput
            value={bottomName}
            id="bottomName"
            type="text"
            onChange={this.onChangeBottomInput}
          />
          <Selector value={fontSize}>
            {fontSizesOptionsList.map(each => (
              <Option id={each.optionId}>{each.displayText}</Option>
            ))}
          </Selector>
          <FormButton type="submit">Generator</FormButton>
        </Form>
      </DivContainer>
    )
  }
}

export default MemeGenerator
