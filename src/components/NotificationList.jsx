import NotificationItem from "./NotificationItem";
const NotificationList = ({ activeTab, notifications }) => {
  const filteredNotifications = notifications.filter(
    (notif) => notif.type === activeTab
  );

  const latestNotifications = filteredNotifications.filter(
    (notif) => notif.section === "Latest"
  );

  const previousNotifications = filteredNotifications.filter(
    (notif) => notif.section === "Previous"
  );

  return (
    <>
      {activeTab !== "System Update" && activeTab !== "News Update" &&  (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-600">LATEST</h3>
              <button className="text-sm text-gray-900">
                Mark all as read
              </button>
            </div>
            {latestNotifications.map((notification, index) => (
              <NotificationItem key={index} {...notification}
              isRead={notification.isRead} 
              isLatest={true}
              />
            ))}
            {latestNotifications.length === 0 && (
              <p className="text-center text-gray-400">
                No latest notifications.
              </p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-4">PREVIOUS</h3>
            {previousNotifications.map((notification, index) => (
              <NotificationItem key={index} {...notification} />
            ))}
            {previousNotifications.length === 0 && (
              <p className="text-center text-gray-400">
                No previous notifications.
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default NotificationList;
