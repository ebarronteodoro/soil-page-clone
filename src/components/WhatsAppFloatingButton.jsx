import WhatsappIcon from "./icons/Whatsapp";
const handleClick= () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=51982172656&text&type=phone_number&app_absent=0",
    "_blank"
  );
}

const WhatsappButton = () => {
  return (
    <div
      className="fixed bottom-7 right-6 size-14 z-10 shadow-sm rounded-full cursor-pointer transition duration-500 flex justify-center items-center bg-[#25d366] hover:bg-[#128c7e] animate-fade-up animate-delay-[2500ms]"
      onClick={handleClick}
    >
      <WhatsappIcon className="size-10 ml-[2px]" />
    </div>
  );
};

export default WhatsappButton;
