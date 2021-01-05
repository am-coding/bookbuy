import App from 'next/app'
import { AppProvider } from '../components/ContextWrapper'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    )
  }
}

export default MyApp