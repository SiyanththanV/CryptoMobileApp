import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {icons} from '../utils/ImgImport'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CryptoCoin = ({ coin_name, coin_symbol, price_usd, percent_change_24h, percent_change_7d }) => {
    const icon = icons[coin_symbol] ? icons[coin_symbol] : icons['GENERIC']
    return (
        <View style={container}>
            <View style={upperRow}>
                <Image style={image} source={ icon } />
                <Text style={coinSymbol}>{coin_symbol} | </Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>${price_usd.toFixed(2)}<Text style={moneySymbol}></Text></Text>
            </View>


            <View style={statisticsContainer}>
                <Text>24h:
                <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_7d} % </Text>
                </Text>
            </View>
        </View>
    )
}

export default CryptoCoin