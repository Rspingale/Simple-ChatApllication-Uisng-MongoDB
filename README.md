# Simple Chat Application with MongoDB

This is a simple chat application built using Express.js, MongoDB, Node.js, and EJS templates. It allows users to engage in real-time chat sessions through a web interface.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/simple-chat-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd simple-chat-app
    ```

3. **Install dependencies using npm:**

    ```bash
    npm install
    ```

### Configuration

1. Ensure that your MongoDB server is running locally.

2. Update the MongoDB connection string in `app.js` to point to your local MongoDB server:

    ```javascript
    mongoose.connect('mongodb://localhost:27017/simple-chat-app', { useNewUrlParser: true, useUnifiedTopology: true });
    ```

## Running the Application

Start the application using nodemon:

```bash
nodemon app.js
 ```

# Chat Application

## Accessing the Application

Visit [http://localhost:3000/chats](http://localhost:3000/chats) in your browser to access the chat application.

## Usage

This chat application is built as a CRUD (Create, Read, Update, Delete) example for learning REST API with MongoDB, Express, Node.js, HTML, and CSS. Follow the steps below to interact with the application:

1. Open the application in your browser.
2. Explore existing chats and messages.
3. **Create:** Use the chat interface to create a new chat and send messages.
4. **Read:** View and read existing messages and chats.
5. **Update:** Edit and update messages or chat details.
6. **Delete:** Remove messages or entire chats as needed.

Feel free to experiment with CRUD operations to understand how RESTful APIs work in the context of a chat application.


## Contact

For any inquiries or collaborations, you can reach out to [Rupesh Pingale](www.linkedin.com/in/rupesh-pingale-89415320b/) on LinkedIn.


## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


