import React, { Component } from 'react';
import Card from './Card.jsx';
export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { articles: [], loading: true };
    }

    componentDidMount() {
        this.populateArticleData();
    }

  

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started.</em></p>
            : (
                <div className="col-md-8">
                    <div className="row">
                        {this.state.articles.map(article => (
                            <Card
                                key={article.title}
                                title={article.title}
                                link={article.link}
                                published={article.published}
                                summary={article.summary}
                            />
                        ))}
                    </div>
                </div>
            );

        return (
            <div>
                <h1 id="tabelLabel">Article List</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateArticleData() {
        const response = await fetch('/home');
        const data = await response.json();
        this.setState({ articles: data, loading: false });
    }
}
