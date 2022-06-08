import React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import { Text, Card, Avatar } from '@rneui/themed';

class Teams extends React.Component {
    componentDidMount(){
        this.props.fetchTeams();
    }

    renderList() {
        return this.props.teams.map(team => {
            return (
                <View key={team.id}>
                    <Card containerStyle={styles.cards}>
                        <View style={styles.row}>
                            <Text style={styles.textGeneral}>#{team.ranking}</Text>
                            <Card.Title style={styles.textGeneral}>{team.name}</Card.Title>
                            <Image style={styles.logo} source={{uri: team.logo}}/>
                        </View>
                        <Card.Divider />
                        <View style={styles.row}>
                            {this.renderListPlayers(team)}
                        </View>
                    </Card>
                </View>
            )
        })
    }
    renderListPlayers(team) {
        return team.players.map(player => {
            return (
                <View>
                    <Avatar size={48} rounded source={{uri: player.image}}/>
                    <Text style={[styles.textGeneral, {fontSize: 9, textAlign: "center"}]}><Avatar size={8} rounded source={{uri: player.country.flag}}/> {player.nickname}</Text>
                </View>
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
        height: 24,
        width: 24
    }
});

const mapStateToProps = state => {
    return { teams: state.teams };
}
export default connect(mapStateToProps, {fetchTeams})(Teams);