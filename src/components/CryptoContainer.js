import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import FetchCoinInfo from '../actions/FetchCoinInfo'
import CryptoCoin from './CryptoCoin';

import Spinner from 'react-native-loading-spinner-overlay';

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinInfo();
    }

    render() {
        const { crypto } = this.props
        const data = crypto.data

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{ color: '#253145' }}
                        animation="fade" />
                </View>
            )
        }

        return (
            < ScrollView contentContainerStyle={styles.contentContainer}>
                {data.data && data.data.map((coin, index) => {
                    return (
                        <CryptoCoin key={index}
                            coin_name={coin.name}
                            coin_symbol={coin.symbol}
                            price_usd={coin.quote.USD.price}
                            percent_change_24h={coin.quote.USD.percent_change_24h}
                            percent_change_7d={coin.quote.USD.percent_change_7d} />
                    )
                })}
            </ScrollView >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchCoinInfo: () => dispatch(FetchCoinInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer)
