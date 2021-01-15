import React, { useState } from 'react'
import ReactCaptchaa from 'react-captchaa'
import 'react-captchaa/dist/index.css'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    )
  }
}

const App = () => {
  const [captcha, setCaptcha] = useState('')
  const getAndSetCaptchaText = (text) => {
    setCaptcha(text)
  }

  const propsTable = `
  |       Property       |  Type  | Required |                               Default                               | Description                                                                                      |
|:--------------------:|:------:|:--------:|:-------------------------------------------------------------------:|--------------------------------------------------------------------------------------------------|
|      captchaText     |  Func  |   true   |                                  -                                  | callback function for returning the captcha text                                                 |
|     captchaLength    | Number |   true   |                                  6                                  | length of captcha                                                                                |
|  captchaButtonClick  |  Func  |   false  |                                  -                                  | callback function for captcha button click                                                       |
|     onCanvasClick    |  Func  |   false  |                                  -                                  | callback function for canvas click                                                               |
|        height        | Number |   false  |                                  50                                 | height of captcha container in px                                                                |
|         width        | Number |   false  |                                 100                                 | width of captcha container in px                                                                 |
|       iconName       | String |   false  |                             FiRefreshCw                             | Icon Name ( Use only react-icons library icons) url  https://react-icons.github.io/react-icons/ |
|       iconColor      | String |   false  |                                 #fff                                | color of button icon                                                                             |
|       iconSize       | String |   false  |                                 1em                                 | size of icon                                                                                     |
|       fontSize       | String |   false  |                                 4em                                 | size of font inside of captcha container                                                         |
|  containerClassName  | String |   false  |                            react-captcha                            | className for whole captcha container                                                            |
| iconWrapperClassName | String |   false  |                      react-captcha-icon-wrapper                     | className for button                                                                             |
|    canvasClassName   | String |   false  |                         react-captcha-canvas                        | className for captcha canvas element                                                             |
|     iconClassName    | String |   false  |                          react-captcha-icon                         | className for icon                                                                               |
|   charactersInclude  | String |   false  | 0123456789abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^& | string from which captcha will generate                                                          |`

  const markdown = `Sample Component Code ✅:

~~~js
import React, { Component } from 'react'
import ReactCaptchaa from 'react-captchaa'
import 'react-captchaa/dist/index.css'

class Example extends Component {
  render() {
    return ( 
      <ReactCaptchaa
      captchaText= {(captchaText) => {
        console.log(captchaText)
        // captcha text ${captcha}
      }}
      captchaLength= {6}
      captchaButtonClick= {(e)=> {console.log(e)}}
      onCanvasClick= {(e)=> {console.log(e)}}
      height= {150}
      width= {280}
      iconName= {'FiRefreshCw'}
      iconColor= {'#fff'}
      fontSize= {'4em'}
      iconSize= {'1em'}
      containerClassName= {'react-captcha'}
      iconWrapperClassName= {'react-captcha-icon-wrapper'}
      canvasClassName= {'react-captcha-canvas'}
      iconClassName= {'react-captcha-icon'}
      charactersInclude= { "0123456789abcdefghijklmnopqrs
      tuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^&" }
       />
       
       )
  }
}
~~~
`
  const installCode = `To install, Hit this in terminal 🐱‍🏍:

~~~js
npm install react-captchaa
~~~
`
  return (
    <div className="root-wrapper">
      <div className='parent-captcha-wrapper'>
        <div className='sub-parent-captcha-wrapper'>
          <div className='text-content'>
            <h1 className='h1-heading title'>React Captchaa ❤️</h1>
            <p className='text-grey'>
              A simple lightweight react component for generating captchas.
            </p>
          </div>
          <div className='captcha-wrapper'>
            <ReactCaptchaa
              captchaText={getAndSetCaptchaText}
              captchaLength={6}
              height={150}
              width={280}
              iconColor={'#fff'}
              iconName={'FiRefreshCw'}
              iconSize={'1em'}
              fontSize={'4em'}
              containerClassName={'react-captcha'}
              iconWrapperClassName={'react-captcha-icon-wrapper'}
              canvasClassName={'react-captcha-canvas'}
              iconClassName={'react-captcha-icon'}
            />
          </div>
          <div className='installation-code'>
            <ReactMarkdown renderers={renderers} children={installCode} />
          </div>
        </div>
        <div className='component-code'>
          <ReactMarkdown renderers={renderers} children={markdown} />
        </div>
      </div>
      <div className='props-table'>
        <table id='table'>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>captchaText</td>
            <td>Func</td>
            <td>True</td>
            <td>-</td>
            <td>callback function for returning the captcha text</td>
          </tr>
          <tr>
            <td>captchaLength</td>
            <td>Number</td>
            <td>True</td>
            <td>6</td>
            <td>length of captcha</td>
          </tr>
          <tr>
            <td>captchaButtonClick</td>
            <td>Func</td>
            <td>False</td>
            <td>-</td>
            <td>callback function for captcha button click</td>
          </tr>

          <tr>
            <td>onCanvasClick</td>
            <td>Func</td>
            <td>False</td>
            <td>-</td>
            <td>callback function for canvas button click</td>
          </tr>
          <tr>
            <td>height</td>
            <td>Number</td>
            <td>False</td>
            <td>50</td>
            <td>height of captcha container in px</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Number</td>
            <td>False</td>
            <td>100</td>
            <td>width of captcha container in px</td>
          </tr>
          <tr>
            <td>iconName</td>
            <td>String</td>
            <td>False</td>
            <td>FiRefreshCw</td>
            <td>
              Icon Name ( Use only react-icons library icons) url
              https://react-icons.github.io/react-icons/
            </td>
          </tr>
          <tr>
            <td>iconColor</td>
            <td>String</td>
            <td>False</td>
            <td>#fff</td>
            <td>color of button icon</td>
          </tr>
          <tr>
            <td>iconSize</td>
            <td>String</td>
            <td>False</td>
            <td>1em</td>
            <td>size of icon</td>
          </tr>

          <tr>
            <td>fontSize</td>
            <td>String</td>
            <td>False</td>
            <td>4em</td>
            <td>size of font inside of captcha container</td>
          </tr>
          <tr>
            <td>containerClassName</td>
            <td>String</td>
            <td>False</td>
            <td>react-captcha</td>
            <td>className for whole captcha container</td>
          </tr>
          <tr>
            <td>iconWrapperClassName</td>
            <td>String</td>
            <td>False</td>
            <td>react-captcha-icon-wrapper</td>
            <td>className for button</td>
          </tr>
          <tr>
            <td>canvasClassName</td>
            <td>String</td>
             <td>False</td>
            <td>react-captcha-canvas</td>
            <td>className for captcha canvas element</td>
          </tr>
          <tr>
            <td>iconWrapperClassName</td>
            <td>String</td>
            <td>False</td>
            <td>react-captcha-icon-wrapper</td>
            <td>className for button</td>
          </tr>
          <tr>
            <td>iconClassName</td>
            <td>String</td>
            <td>False</td>
            <td>react-captcha-icon</td>
            <td>className for icon</td>
          </tr>
          <tr>
            <td>charactersInclude</td>
            <td>String</td>
            <td>False</td>
            <td>
              0123456789abcdefghijklmnopqrstuvwxz
              ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^&
            </td>
            <td>string from which captcha will generate</td>
          </tr>
        </table>
      </div>
      <footer className='footer'>
        <p>
          Made with ❤️ by{' '}
          <a className='footer-link' href='https://github.com/alii13'>
            Ali
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
