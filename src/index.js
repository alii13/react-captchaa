import React, { Component } from 'react'
import styles from './index.module.css'
import Icon from 'react-icons-wrapper'

export default class ReactCaptchaa extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.initializeCaptchaText = this.initializeCaptchaText.bind(this)
    this.createCaptcha = this.createCaptcha.bind(this)
    this.state = {
      captchaText: ''
    }
  }

  initializeCaptchaText() {
    let charsArray = this.props.charactersInclude
    let lengthOtp = this.props.captchaLength
    let captcha = []
    for (let i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      let index = Math.floor(Math.random() * charsArray.length + 1) //get the next character from the array
      if (captcha.indexOf(charsArray[index]) === -1)
        captcha.push(charsArray[index])
      else i--
    }
    return captcha.join('')
  }

  createCaptcha(e) {
    this.setState(
      {
        captchaText: this.initializeCaptchaText()
      },
      () => {
        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        canvas.height = this.props.height
        canvas.width = this.props.width
        context.font = `${this.props.fontSize} ${this.props.font}`
        context.strokeStyle = this.props.fontColor
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.strokeText(this.state.captchaText, centerX, centerY)
        this.props.captchaText(this.state.captchaText)
        try {
          if (this.props?.captchaButtonClick) this.props.captchaButtonClick(e)
        } catch (err) {}
      }
    )
  }
  componentDidMount() {
    const canvas = this.canvasRef.current
    const context = canvas.getContext('2d')
    canvas.height = this.props.height
    canvas.width = this.props.width
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    context.font = `${this.props.fontSize} ${this.props.font}`
    context.strokeStyle = this.props.fontColor
    const captchaText = this.initializeCaptchaText()
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeText(captchaText, centerX, centerY)
    this.props.captchaText(captchaText)
    this.setState({
      captchaText: captchaText
    })
  }

  render() {
    return (
      <div
        className={`${styles.react__captcha} ${this.props.containerClassName}`}
      >
        <canvas
          onClick={this.props.onCanvasClick}
          ref={this.canvasRef}
          className={`${styles.react__captcha__canvas} ${this.props.canvasClassName}`}
        />
        <div
          onClick={this.createCaptcha}
          className={`${styles.react__captcha__icon__wrapper} ${this.props.iconWrapperClassName}`}
        >
          <Icon
            name={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor}
            className={this.props.iconClassName}
          />
        </div>
      </div>
    )
  }
}

ReactCaptchaa.defaultProps = {
  fontSize: '25px',
  fontColor: '#109CF1',
  font: 'Georgia',
  height: 50,
  width: 100,
  backgroundColor: '#fff',
  containerClassName: 'react-captcha',
  iconWrapperClassName: 'react-captcha-icon-wrapper',
  canvasClassName: 'react-captcha-canvas',
  iconClassName: 'react-captcha-icon',
  captchaLength: 6,
  iconColor: '#fff',
  iconName: 'FiRefreshCw',
  iconSize: '1em',
  charactersInclude:
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*'
}
