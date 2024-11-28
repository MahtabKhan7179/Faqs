import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const SingleQuestion = ({ id, title, info }) => {
    const [showPara, setShowPara] = useState(false);
    return <div key={id} className="question">
        <header>
            <h5>{title}</h5>
            <button className="question-btn" onClick={() => { setShowPara(!showPara) }} >
                {showPara ? <CiCircleMinus /> : <CiCirclePlus />}
            </button>
        </header>
        {showPara && <p>{info}</p>}
    </div>;
};
export default SingleQuestion;
