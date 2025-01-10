import NotificationItem from "./NotificationItem";
const NotificationList = ({ activeTab, notifications, pageType }) => {
  const filteredNotifications = notifications.filter(
    (notif) => notif.type === activeTab
  );

  const latestNotifications = filteredNotifications.filter(
    (notif) => notif.section === "Latest"
  );

  const previousNotifications = filteredNotifications.filter(
    (notif) => notif.section === "Previous"
  );

  console.log("Notifications:", notifications);

  return (
    <>
      {activeTab !== "System Update" && activeTab !== "News Update" && (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-bold text-gray-600">LATEST</h3>
              <button className="text-sm text-gray-900">
                Mark all as read
              </button>
            </div>
            {latestNotifications.length > 0 ? (
              latestNotifications.map((notification, index) => (
                <NotificationItem
                  key={index}
                  {...notification}
                  isRead={
                    !(
                      [
                        "UserFilterPage",
                        "IspProfilePage",
                        "IspProfilePageEdit",
                        "BspProfilePage",
                      ].includes(pageType) ||
                      ["New Message", "Confirmed Booking"].includes(
                        notification.type
                      )
                    )
                  }
                  isLatest={true}
                  isConfirmBooking={
                    [
                      "IspProfilePage",
                      "IspProfilePageEdit",
                      "BspProfilePage",
                    ].includes(pageType) &&
                    notification.type === "Confirmed Booking"
                  }
                />
              ))
            ) : (
              <p className="text-center text-gray-400">
                No latest notifications.
              </p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-5 mt-2">
              PREVIOUS
            </h3>
            {previousNotifications.length > 0 ? (
              previousNotifications.map((notification, index) => (
                <NotificationItem
                  key={index}
                  {...notification}
                  isConfirmBooking={
                    [
                      "IspProfilePage",
                      "IspProfilePageEdit",
                      "BspProfilePage",
                    ].includes(pageType) &&
                    notification.type === "Confirmed Booking"
                  }
                />
              ))
            ) : (
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
