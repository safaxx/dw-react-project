import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(true);
  const [isCharAllowed, setIsCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const pswrdRef = useRef(null);
  const [btnText, setBtnText] = useState("Copy");

  const handleGeneratePswrd = () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumAllowed) {
      letters += "0123456789";
    }
    if (isCharAllowed) {
      letters += "!@#$%^&*()<>?{}";
    }

    let pswrd = "";

    for (let i = 1; i <= length; i++) {
      const randomIdx = Math.floor(Math.random() * letters.length);
      pswrd += letters.charAt(randomIdx);
    }
    setPassword(pswrd);
    console.log(pswrd);
  };

  useEffect(() => {
    handleGeneratePswrd();
  }, [length, isCharAllowed, isNumAllowed]);

  const handleCopyPswrd = () => {
    window.navigator.clipboard.writeText(password);
    pswrdRef.current?.select();
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText("Copy");
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-6">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Password Generator
          </h1>

          {/* Password */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={password}
              placeholder="Your password"
              className="flex-1 bg-slate-800 text-white px-4 py-3 rounded-xl 
                   outline-none border border-slate-700 
                   focus:border-indigo-500"
              readOnly
              ref={pswrdRef}
            />

            <button
              className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 
                   text-white rounded-xl transition"
              onClick={handleCopyPswrd}
            >
              {btnText}
            </button>
          </div>

          {/* Length */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-slate-300 font-medium">
                Password Length
              </label>
            </div>

            <button
              onClick={() => setLength((prev) => Math.max(6, prev - 1))}
              className="px-4 py-2 text-xl text-white hover:bg-slate-700"
            >
              −
            </button>

            <span className="px-4 text-white font-semibold">{length}</span>

            <button
              onClick={() => setLength((prev) => Math.min(30, prev + 1))}
              className="px-4 py-2 text-xl text-white hover:bg-slate-700"
            >
              +
            </button>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {/* Numbers */}
            <label
              className="flex items-center justify-between bg-slate-800 
                        px-4 py-3 rounded-xl cursor-pointer"
            >
              <span className="text-slate-200">Include Numbers</span>

              <input
                type="checkbox"
                checked={isNumAllowed}
                onChange={(e) => setIsNumAllowed(e.target.checked)}
                className="w-5 h-5 accent-indigo-500 cursor-pointer"
              />
            </label>

            {/* Characters */}
            <label
              className="flex items-center justify-between bg-slate-800 
                        px-4 py-3 rounded-xl cursor-pointer"
            >
              <span className="text-slate-200">Include Special Characters</span>

              <input
                type="checkbox"
                checked={isCharAllowed}
                onChange={(e) => setIsCharAllowed(e.target.checked)}
                className="w-5 h-5 accent-indigo-500 cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
