import React, { Component } from 'react';
import Card from '../App/Card.jsx'; // Update the path accordingly

export default class App extends Component {
    // ... rest of your component code ...

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

    // ... rest of your component code ...
}

