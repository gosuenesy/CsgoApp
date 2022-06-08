import React from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import { Text, Card, Button } from '@rneui/themed';

class News extends React.Component {
    componentDidMount(){
        this.props.fetchNews();
    }

    renderList() {
        return this.props.news.map(article => {
            return (
                <Card containerStyle={styles.cards} key={article.time}>
                    <Card.Title style={styles.textGeneral}>{article.title}</Card.Title>
                    <Card.Divider />
                    <Text style={[styles.textGeneral, {margin: 4, fontSize: 12}]}>{article.description}</Text>
                    <Text style={[styles.textGeneral, {margin: 4, fontSize: 12, textAlign: "right"}]}>{article.time.slice(0,-14)}</Text>
                    <Button title="Read more" style={{margin: 4}} buttonStyle={{backgroundColor: "#1EB980", width: 94}} onPress={() => Linking.openURL(article.link)}/>
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
        height: 24,
        width: 24
    }
});

const mapStateToProps = state => {
    return { news: state.news };
}
export default connect(mapStateToProps, {fetchNews})(News);