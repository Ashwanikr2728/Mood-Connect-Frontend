const TypingLoader = () => {
  return (
    <>
      <style>
        {`
        .loader {
  display: flex;
  gap: 6px;
}

.loader span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #818cf8; /* soft indigo */
  animation: bounce 1.2s infinite ease-in-out;
}

.loader span:nth-child(2) {
  animation-delay: 0.2s;
}

.loader span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
}
        `}
      </style>

      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default TypingLoader;
