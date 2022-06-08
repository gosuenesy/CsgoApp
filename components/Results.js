import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchResults } from '../actions';
import { Text, Card } from '@rneui/themed';

class Results extends React.Component {
    componentDidMount(){
        this.props.fetchResults();
    }

    renderList() {
        return this.props.results.map(result => {
            return (
                <Card key={result.matchId} containerStyle={styles.cards}>
                    <View style={styles.row}>
                    <Card.Title style={styles.textGeneral}>{result.event.name}</Card.Title>
                    <Image style={styles.logo} source={{uri: result.event.logo}}/>
                    </View>
                    <Text style={[styles.textGeneral, {fontSize: 12, margin:4}]}>{result.time.slice(0,-14)}</Text>
                    <Card.Divider />
                    <View style={styles.row}>
                        {this.renderListTeams(result)}
                    </View>
                </Card>
            )
        })
    }
    renderListTeams(resultteam) {
        return resultteam.teams.map(team => {
            return (
                <Card containerStyle={styles.cards} key={team.name}>
                    <Card.Title style={styles.textGeneral}>{team.name}</Card.Title>
                    <Text style={[styles.textGeneral, {fontSize: 20, textAlign: "center"}]}>{team.result}</Text>
                </Card>
            )
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
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
    return { results: state.results };
}
export default connect(mapStateToProps, {fetchResults})(Results);