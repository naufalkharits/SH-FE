const { io } = require("socket.io-client")

const ioClient = io(process.env.REACT_APP_SERVER_URL)

export default ioClient
