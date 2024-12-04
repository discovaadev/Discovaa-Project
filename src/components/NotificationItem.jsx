import blockImg from "../assets/blockImg.png";

const NotificationItem = ({
  image,
  name,
  message,
  time,
  date,
  text,
  isRead,
  isLatest,
  isConfirmBooking,
}) => {
  return (
    <section>
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-grow">
          <div className="flex gap-1 items-center">
            <p className="text-sm font-bold">{name}</p>
            <p className="text-sm font-normal">{text}</p>
            <p className="text-sm font-normal">{date}</p>
            <p className="text-xs text-gray-500 font-normal">{time}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-sm text-gray-600">{message}</p>
            {isConfirmBooking ? (
              <div className="flex items-center space-x-1 text-gray-600 -translate-y-6">
                <img src={blockImg} alt="block" className="w-[22px] h-[22px]" />
                <p className="text-xl font-normal">Block</p>
              </div>
            ) : (
              isLatest &&
              !isRead && (
                <span className="w-2.5 h-2.5 rounded-full bg-black inline-block"></span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationItem;
