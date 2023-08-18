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

    renderArticles() {
        return (
            <div className="row">
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
                <div className="col-4">
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
    }

    render() {
        return (
            <div>
                {this.state.loading
                    ? <p><em>Loading... Please refresh once the ASP.NET backend has started.</em></p>
                    : this.renderArticles()}
            </div>
        );
    }

    async populateArticleData() {
        const response = await fetch('/home');
        const data = await response.json();
        this.setState({ articles: data, loading: false });
    }
}
