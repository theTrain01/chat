import styles from './ChatRoomPage.module.css'

const ChatRoomPage = ({messages, setMessageInput, messageInput, handleKeyDown}) => {
    return (
        <div>
            <h1>Chat Room</h1>
    
            <input
                type="text"
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                onKeyDown={handleKeyDown}
            />
    
            {messages.length 
                ?   (
                        <div>
                            {messages.map((message, index) => (
                                <p key={index}>{message}</p>
                            ))}
                        </div>
                    )
                : <h2>No messages</h2>
            }
            
        </div>
    )
}

export default ChatRoomPage