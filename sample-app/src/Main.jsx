const name = (name) => {
    return `Hello ${name}`;
};

const array = [
    {
        name: 'Jane',
        surname: 'Smith'
    },

    {
        name: 'John',
        surname: 'Doe'
    }
];

const Main = () => {
    return (
        <main className="main-content">
            <div className="d-flex flex-column align-items-center justify-content-around">
                {array.map((item) => {
                    return (
                        <p>
                            {' '}
                            {item.name} {item.surname}{' '}
                        </p>
                    );
                })}
            </div>

            <h1> {name('Peter')} </h1>
            <h1> Fun facts about React </h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
};

export default Main;
