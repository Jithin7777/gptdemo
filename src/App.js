import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sentBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImg from "./assets/chatgptLogo.svg";
import { sendMsg } from "./openai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages,setMessages] = useState([
    {
    text: "Hi, I am chatgpt",
    isBot:true,
  }
]);

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleSend();
  }
};

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text,isBot:false}
    ])
      const res = await sendMsg(input);
      // console.log(res);
      setMessages([...messages,
      {text:input,isBot:false},
    {text:res,isBot:true}
    ]);
     };
  
  return (
    <div className="App">
      <div xs={3} className="sideBar">
        <div className="upperside">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Chatgpt</span>
          </div>
          <button className="midBtn">
            <img src={addbtn} alt="new chat" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is programming?
            </button>
            <div>
              <button className="query">
                <img src={msgIcon} alt="" />
                What is programming?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerside">
          <div className="listItems">
            <img src={home} alt="" className="listImg" />
            Home
          </div>

          <div className="listItems">
            <img src={saved} alt="" className="listImg" />
            Saved
          </div>

          <div className="listItems">
            <img src={rocket} alt="" className="listImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div xs={9} className="main">
        <div className="chats">
          {/* <div className="chat">
            <img src={userIcon} alt="" className="chatImg" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              corporis quisquam repellat id dolorem quos reprehenderit
              explicabo, quas libero necessitatibus!
            </p>
          </div>
          <div className="chat bot">
            <img src={gptImg} alt="" className="chatImg" />
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut neque
              quod dolor accusamus sunt incidunt architecto, iure, veniam rerum
              ipsum blanditiis expedita repudiandae suscipit mollitia itaque aut
              ratione et amet, sit assumenda doloremque perferendis unde?
              Deserunt, aliquam fugit. Voluptatibus alias esse maiores nihil
              unde aliquam nemo eum tempore distinctio veritatis. Commodi nobis
              quis obcaecati. Esse, laborum incidunt! Nisi ex sit, sint odit
              natus ipsa aspernatur illum dolorem eos quod explicabo voluptas,
              quis fuga ut eum autem reprehenderit quos provident quia dolore
              corporis architecto nihil optio aliquid? Ratione animi ipsam minus
              odit nulla eos iste doloremque deleniti exercitationem ut,
              consequatur quo!
            </p>
          </div> */}
          {messages.map((message,i)=>
                      <div key={i} className={message.isBot?"chat bot":"chat"}>
                      <img src={message.isBot?gptImg:userIcon} alt="" className="chatImg" />
                      <p className="txt">
                        {message.text}
                      </p>
                    </div>
          
          )}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={handleKeyPress}
            />
            <button className="send" onClick={handleSend}>
              <img src={sentBtn} alt="" />
            </button>
          </div>
          <p>
            Chatgpt may produce inaccurate information about people,places, or
            facts
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
