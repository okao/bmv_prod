"use client"
import { RWebShare } from "react-web-share";

const ShareNewButton = ({ title, text, url }: any) => {
    return (
        <RWebShare
            data={{
                text: text,
                title: title,
                url: url,
            }}
        >
        <button>
          Share 🔗
        </button>
        </RWebShare>
    );
};
export default ShareNewButton;