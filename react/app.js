const heading = React.createElement(
    "h1",
    { id: "heading" },
    ["Hello ",
    React.createElement(
        "u",
        {},
        "World"
    )]
);

const body = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            [
                React.createElement(
                    "h1",
                    {id: "h1"},
                    "Child1 H1"
                ),
                React.createElement(
                    "h2",
                    {id: "h2"},
                    "Child1 H2"
                )
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement(
                    "h1",
                    {id: "h1"},
                    "Child2 H1"
                ),
                React.createElement(
                    "h2",
                    {id: "h2"},
                    "Child2 H2"
                )
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(body);
