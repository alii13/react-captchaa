# react-captchaa

> A simple lightweight react component for generating captchas.

[![NPM](https://img.shields.io/npm/v/react-captchaa.svg)](https://www.npmjs.com/package/react-captchaa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install ✨

```bash
npm install --save react-captchaa
```

## Usage 🎁

```jsx
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
```

## Props 🕶

 |       Property       |  Type  | Required |                               Default                               |Description                                                                                      |
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
|   charactersInclude  | String |   false  | 0123456789abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^& | string from which captcha will generate                                                          |



## License

MIT © [alii13](https://github.com/alii13)
