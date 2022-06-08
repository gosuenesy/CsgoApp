import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';
import { DataTable } from 'react-native-paper';

class Players extends React.Component {
    componentDidMount(){
        this.props.fetchPlayers();
    }

    renderList() {
        return this.props.players.map(player => {
            return(
                <DataTable.Row key={player.id}>
                    <DataTable.Cell textStyle={styles.textGeneral}>{player.nickname}</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={styles.textGeneral}>{player.rating}</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={styles.textGeneral}>{player.kd}</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={styles.textGeneral}>{player.mapsPlayed}</DataTable.Cell>
                </DataTable.Row>
            )
        })
    }
    render() {
        return (
            <DataTable style={{margin:0}}>
                <DataTable.Header style={{backgroundColor:"#27272F"}}>
                    <DataTable.Title textStyle={styles.textGeneral}>Name</DataTable.Title>
                    <DataTable.Title numeric textStyle={styles.textGeneral}>Rating</DataTable.Title>
                    <DataTable.Title numeric textStyle={styles.textGeneral}>KD</DataTable.Title>
                    <DataTable.Title numeric textStyle={styles.textGeneral}>Maps</DataTable.Title>
                </DataTable.Header>
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
            </DataTable>
        );
    }
}

const styles = StyleSheet.create({
    textGeneral: {
        fontFamily: "",
        color: "white"
    },
    cards: {
        borderColor: "#373740",
        backgroundColor: "#373740",
        elevation: 5
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        height: 22,
        width: 22,
        margin: 2
    }
});

const mapStateToProps = state => {
    return { players: state.players };
}
export default connect(mapStateToProps, {fetchPlayers})(Players);