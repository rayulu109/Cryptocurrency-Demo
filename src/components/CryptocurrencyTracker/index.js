// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    this.setState({
      cryptocurrencyData: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogoUrl: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrencyList = () => {
    const {cryptocurrencyData} = this.state
    return <CryptocurrenciesList cryptocurrencyData={cryptocurrencyData} />
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-spins">
      <Loader
        type="Puff"
        color="white"
        className="ring"
        height={80}
        width={80}
      />
      <Loader
        type="Rings"
        color="yellow"
        className="ring"
        height={80}
        width={80}
      />
      <Loader
        type="TailSpin"
        color="red"
        className="ring"
        height={80}
        width={80}
      />
      <Loader
        type="Rings"
        color="yellow"
        className="ring"
        height={80}
        width={80}
      />
      <Loader
        type="Puff"
        color="white"
        className="ring"
        height={80}
        width={80}
      />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrencyList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
